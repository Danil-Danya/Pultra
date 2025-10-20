import { defineStore } from 'pinia';
import CatalogService from '@/entities/catalog/service.js';

const useCatalogStore = defineStore('catalog', {
    state: () => ({
        catalog: {},
        product: {},
        goods: {},
        productCard: {},
        catalogProduct: {},
        catalogWare: {},
        targetCategory: {},
    }),

    actions: {
        async fetchCatalog () {
            this.catalog = await CatalogService.getCatalog();
        },

        async fetchTargetCategory (slug) {
            this.targetCategory = await CatalogService.getTargetCategoryBySlug(slug);
        },

        async fetchProduct (slug, type) {
            this.product = await CatalogService.getProductBySlug(slug, type);
        },

        async fetchGoods (slug) {
            this.goods = await CatalogService.getGoodsBySlug(slug);
        },

        async fetchProductCard (slug) {
            this.productCard = await CatalogService.getProductCardBySlug(slug);
        },

        async fetchCatalogProduct () {
            this.catalogProduct = await CatalogService.getCatalogProduct();
        },

        async fetchCatalogWare () {
            this.catalogWare = await CatalogService.getCatalogWare();
        }
    }
})

export {
    useCatalogStore
}