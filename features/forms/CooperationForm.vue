<template>
    <form class="cooperation__form">
        <div class="cooperation__form-info">
            <h2 class="title cooperation__form-title">Оставьте заявку на дилерство</h2>
        </div>
        <div class="cooperation__form-container">
            <div class="cooperation__form-content">
                <div class="cooperation__form-input-container">
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
                <div class="cooperation__form-input-container">
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
            <div class="cooperation__form-content">
                <div class="cooperation__form-input-container-full">
                    <Label 
                        for="#name" 
                        text="почта"
                    />
                    <Input 
                        v-model="payload.email" 
                        type="text" 
                        placeholder="example@mail.com" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Телефон'))" 
                    />
                </div>
            </div>
            <div class="cooperation__form-content">
                <div class="cooperation__form-input-container">
                    <Label 
                        for="#name" 
                        text="Название огранизации"
                    />
                    <Input 
                        v-model="payload.company" 
                        type="text" 
                        placeholder="ООО “Ромашка”" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Имя'))" 
                    />
                </div>
                <div class="cooperation__form-input-container">
                    <Label 
                        for="#name" 
                        text="ИНН организации"
                    />
                    <Input 
                        v-model="payload.inn" 
                        type="text" 
                        placeholder="000000000000" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Телефон'))" 
                    />
                </div>
            </div>
            <div class="cooperation__form-content">
                <div class="cooperation__form-input-container">
                    <Label 
                        for="#name" 
                        text="Регион"
                    />
                    <Input 
                        v-model="payload.region" 
                        type="text" 
                        placeholder="Челябинск" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Имя'))" 
                    />
                </div>
                <div class="cooperation__form-input-container">
                    <Label 
                        for="#name" 
                        text="Вид деятельности"
                    />
                    <Input 
                        v-model="payload.activity" 
                        type="text" 
                        placeholder="Торговая сеть" 
                        :error="errors.find(err => err.includes('Имя'))" 
                    /> 
                    <InputInvalidMessage 
                        :text="errors.find(err => err.includes('Телефон'))" 
                    />
                </div>
            </div>
            <div class="cooperation__form-send">
                <Button text="Стать диллером" class="cooperation__form-button" @click.prevent.stop="sendMessage" />
                <div class="cooperation__form-confirm">
                    <Checkbox v-model="payload.agree" />
                    <p 
                        class="cooperation__form-confirm-p red" 
                        v-if="errors.find(err => err.includes('вы должны согласиться'))"
                    >
                        {{ errors.find(err => err.includes('вы должны согласиться')) }} 
                    </p>
                    <p 
                        class="cooperation__form-confirm-p" 
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
        email: '',
        company: '',
        inn: '',
        region: '',
        activity: '',
        agree: false, 
    }); 
    
    const { errors, sendMessage } = useForm(payload);

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/forms/cooperation-form.scss';
</style>