<template>
    <form class="catalog__form catalog__card">
        <div class="catalog__form-container">
            <div class="catalog__form-info">
                <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  src="/images/catalog/form/ph.png" alt="Картинка">
                <h3 class="catalog__form-title">Отправим каталог продукции на <span class="green">WhatsApp</span></h3>
            </div>
            <div class="catalog__form-content">
                <div class="catalog__form-input-container">
                    <Label 
                        for="#name" 
                        text="Имя"
                    />
                    <Input 
                        v-model="payload.name" 
                        type="text" 
                        placeholder="Например, Алексей" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Имя'))" 
                    />
                </div>
                <div class="catalog__form-input-container">
                    <Label 
                        for="#name" 
                        text="Телефон"
                    />
                    <Input 
                        v-model="payload.phone" 
                        type="tel" 
                        placeholder="+7 (000) 000 00-00" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Телефон'))" 
                    />
                </div>
            </div>
            <div class="catalog__form-send">
                <Button text="Получить образцы" class="catalog__form-button" @click.prevent.stop="sendMessage" />
                <div class="catalog__form-confirm">
                    <Checkbox v-model="payload.agree" />
                    <p 
                        class="catalog__form-confirm-p red" 
                        v-if="errors.find(err => err.includes('вы должны согласиться'))"
                    >
                        {{ errors.find(err => err.includes('вы должны согласиться')) }} 
                    </p>
                    <p 
                        class="catalog__form-confirm-p" 
                        v-else
                    >   
                        Я соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных
                    </p>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

    import Button from '@/shared-ui/ui/Button.vue';
    import Input from '@/shared-ui/ui/Input.vue';
    import Checkbox from '@/shared-ui/ui/CheckBox.vue';
    import Label from '@/shared-ui/ui/Label.vue';
    import InputInvalidMessage from '@/shared-ui/ui/InputInvalidMessage.vue';

    import { useForm } from '@/composables/useForm.js'; 

    const payload = reactive({ 
        name: '', 
        phone: '', 
        section: 'Каталог',
        agree: false, 
    }); 
    
    const { errors, sendMessage } = useForm(payload);

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/forms/catalog-form.scss';
</style>

