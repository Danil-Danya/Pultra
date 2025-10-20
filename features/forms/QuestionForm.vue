<template>
    <form class="question__form">
        <div class="question__form-container">
            <div class="question__form-text">
                <h2 class="question__form-title">Остались вопросы?</h2>
                <h3 class="question__form-title-mini">Заполните форму</h3>
                <p class="question__form-text-p">Получите консультацию экспертов нашей компании</p>
            </div>
            <div class="question__form-content">
                <div class="question__form-input-container">
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
                <div class="question__form-input-container">
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
                <div class="question__form-send">
                    <Button text="Получить консультацию" class="question__form-button" @click.prevent.stop="sendMessage" />
                    <div class="question__form-confirm">
                        <Checkbox v-model="payload.agree" />
                        <p 
                            class="question__form-confirm-p red" 
                            v-if="errors.find(err => err.includes('вы должны согласиться'))"
                        >
                            {{ errors.find(err => err.includes('вы должны согласиться')) }} 
                        </p>
                        <p 
                            class="question__form-confirm-p" 
                            v-else
                        >   
                            Я соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных
                        </p>
                    </div>
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
        agree: false, 
    }); 
    
    const { errors, sendMessage } = useForm(payload);

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/forms/question-form.scss'
</style>
