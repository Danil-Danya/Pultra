<template>
    <form class="quality__form">
        <div class="quality__form-container">
            <div class="quality__form-text">
                <h2 class="quality__form-title">Заполните форму</h2>
                <p class="quality__form-text-p">Мы отправим вам коробку с образцами совершенно бесплатно!</p>
            </div>
            <div class="quality__form-content">
                <div class="quality__form-input-container">
                    <Label 
                        for="#name" 
                        text="Имя"
                    />
                    <Input 
                        type="text"
                        placeholder="Например, Алексей"
                    />
                    <InputInvalidMessage 
                        text=""
                    />
                </div>
                <div class="quality__form-input-container">
                    <Label 
                        for="#name" 
                        text="Телефон"
                    />
                    <Input 
                        type="number"
                        placeholder="+7 (000) 000 00-00"
                    />
                    <InputInvalidMessage 
                        text=""
                    />
                </div>
                <div class="quality__form-input-container">
                    <Label 
                        for="#name" 
                        text="Почта"
                    />
                    <Input 
                        type="text"
                        placeholder="example@mail.ru"
                    />
                    <InputInvalidMessage 
                        text=""
                    />
                </div>
                <div class="quality__form-input-container">
                    <Label 
                        for="#name" 
                        text="Название компании"
                    />
                    <Input 
                        type="text"
                        placeholder="ООО “Ромашка”"
                    />
                    <InputInvalidMessage 
                        text=""
                    />
                </div>
                <div class="quality__form-send">
                    <Button text="Получить образцы" class="quality__form-button"/>
                    <div class="quality__form-confirm">
                        <Checkbox />
                        <p class="quality__form-confirm-p">Я соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных</p>
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

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/features/forms/quality-form.scss'
</style>
