<template>
    <form class="catalog__form catalog__card">
        <div class="catalog__form-container">
            <div class="catalog__form-info">
                <img src="/images/catalog/form/ph.png" alt="Картинка">
                <h3 class="catalog__form-title">Отправим каталог продукции на <span class="green">WhatsApp</span></h3>
            </div>
            <div class="catalog__form-content">
                <div class="catalog__form-input-container">
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
                <div class="catalog__form-input-container">
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
            </div>
            <div class="catalog__form-send">
                <Button text="Получить образцы" class="catalog__form-button"/>
                <div class="catalog__form-confirm">
                    <Checkbox />
                    <p class="catalog__form-confirm-p">Я соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных</p>
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
    @import '@/assets/styles/ui/shared/features/forms/catalog-form.scss';
</style>

