<template>
    <form class="whatsapp__form">
        <div class="whatsapp__form-content">
            <div class="whatsapp__form-content-container">
                <div class="whatsapp__form-input-container">
                    <Label 
                        for="#name" 
                        text="Имя"
                        color="dark"
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
                <div class="whatsapp__form-input-container">
                    <Label 
                        for="#name" 
                        text="Телефон"
                        color="dark"
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
            <div class="whatsapp__form-send">
                <Button text="Получить каталог" class="whatsapp__form-button" @click.prevent.stop="sendMessage" />
                <div class="whatsapp__form-confirm">
                    <Checkbox v-model="payload.agree" />
                    <p 
                        class="whatsapp__form-confirm-p red" 
                        v-if="errors.find(err => err.includes('вы должны согласиться'))"
                    >
                        {{ errors.find(err => err.includes('вы должны согласиться')) }} 
                    </p>
                    <p 
                        class="whatsapp__form-confirm-p" 
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

    const payload = reactive({ 
        name: '', 
        phone: '', 
        agree: false, 
    }); 
    
    const { errors, sendMessage } = useForm(payload);

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/forms/whatsapp-form.scss';
</style>