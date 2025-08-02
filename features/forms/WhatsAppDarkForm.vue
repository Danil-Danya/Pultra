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
                        type="text"
                        placeholder="Например, Алексей"
                        color="dark"
                    />
                    <InputInvalidMessage 
                        text=""
                    />
                </div>
                <div class="whatsapp__form-input-container">
                    <Label 
                        for="#name" 
                        text="Телефон"
                        color="dark"
                    />
                    <Input 
                        type="number"
                        placeholder="+7 (000) 000 00-00"
                        color="dark"
                    />
                    <InputInvalidMessage 
                        text=""
                    />
                </div>
            </div>
            <div class="whatsapp__form-send">
                <Button text="Получить каталог в pdf" class="whatsapp__form-button"/>
                <div class="whatsapp__form-confirm">
                    <Checkbox color="dark" />
                    <p class="whatsapp__form-confirm-p">Я соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных</p>
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

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/forms/whatsapp-form.scss';
</style>