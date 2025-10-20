import { defineStore } from 'pinia';
import PostService from '@/entities/posts/service.js';

const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        currentPost: {}
    }),

    actions: {
        async fetchAll (pagination) {
            console.log(pagination);
            
            this.posts = await PostService.getAll(pagination);
        },

        async fetchOne (slug) {
            this.currentPost = await PostService.getOneBySlug(slug);
        }
    }
})

export {
    usePostsStore
}