<template>
    <div>
        <h1>Страница с постами</h1>
        <MyInput
            v-focus
            v-model="searchQuery"
            placeholder="Поиск.."
        />
        <div class="app_btns">
            <MyButton
                @click="showDialog">
                Создать пост
            </MyButton>
            <MySelect
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <MyDialog v-model:show="dialogVisible">
            <PostForm 
                @create="createPost" 
            />
        </MyDialog>
        <PostList 
            :posts="sortedAndSearched"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>
            Идёт загрузка постов..
        </div>
        <div v-intersection="loadMorePosts"></div>
        <!-- <div class="page_wrapper">
            <div v-for="pageNumber in totalPages" 
                :key="pageNumber" 
                class="page" 
                :class="{
                    'current_page': page === pageNumber
                }"
                @click="changePage(pageNumber)"
                >{{ pageNumber }}</div>
        </div> -->
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'

export default {
    components: {
    PostForm,
    PostList,
},
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,  
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ],
            
        }
    },
    methods: {
        // Функция создания поста
        createPost(post) {
           this.posts.push(post)
           this.dialogVisible = false
        },
        // Функция удаления поста
        removePost(post) {
            this.posts = this.posts.filter(el => el.id !== post.id)
        },
        // Функция открытия модального окна
        showDialog() {
            this.dialogVisible = true
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber
        // },
        // Функция с запросом для получения постов с сервера
        async fetchPosts() {
            try {
                this.isPostsLoading = true
                    const respons = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit  
                        }
                    })
                    this.totalPages = Math.ceil(respons.headers['x-total-count'] / this.limit)
                    this.posts = respons.data
            } catch(e) {
                console.log('Ошибка')
            } finally {
                this.isPostsLoading = false
            }
        },
        // Функция для подгрузки постов при долистывании страницы до конца
        async loadMorePosts() {
            try {
                this.page += 1
                    const respons = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit  
                        }
                    })
                    this.totalPages = Math.ceil(respons.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...respons.data]
            } catch(e) {
                console.log('Ошибка')
            } finally {
            }
        }
    },
    computed: {
        // Сортировка
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        // Поиск по title
        sortedAndSearched() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    },
    mounted() {
        this.fetchPosts()
        // Intersection Observer API
        // let options = {
        //     rootMargin: '0px',
        //     threshold: 1.0
        // }

        // let callback = (entries, observer) => {
        //     if (entries[0].isIntersecting && this.page < this.totalPages) {
        //         this.loadMorePosts()
        //     }
        // };

        // let observer = new IntersectionObserver(callback, options);
        //     observer.observe(this.$refs.observer)
    }
}
</script>

<style>

.app_btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
.page_wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    width: 30px;
    text-align: center;
    margin-right: 2px;
}
.current_page {
    border: 2px solid purple;
}
</style>