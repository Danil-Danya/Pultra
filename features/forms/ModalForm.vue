<template>
    <form class="quality__form">
        <div class="quality__form-container">
            <div class="quality__form-content">
                <div class="quality__form-input-container">
                    <Label for="#name" text="Имя" />
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

                <div class="quality__form-input-container">
                    <Label for="#phone" text="Телефон" />
                    <Input
                        v-model="payload.phone"
                        type="tel"
                        placeholder="+7 (000) 000 00-00"
                        :error="errors.find(err => err.includes('Телефон'))"
                    />
                    <InputInvalidMessage
                        :text="errors.find(err => err.includes('Телефон'))"
                    />
                </div>

                <div class="quality__form-input-container" v-if="type === 'extended'">
                    <Label for="#email" text="Почта" />
                    <Input
                        v-model="payload.email"
                        type="email"
                        placeholder="example@mail.ru"
                        :error="errors.find(err => err.includes('email'))"
                    />
                    <InputInvalidMessage
                        :text="errors.find(err => err.includes('email'))"
                    />
                </div>

                <div class="quality__form-input-container" v-if="type === 'extended'">
                    <Label for="#company" text="Название компании" />
                    <Input
                        v-model="payload.company"
                        type="text"
                        placeholder="ООО “Ромашка”"
                        :error="errors.find(err => err.includes('Компания'))"
                    />
                    <InputInvalidMessage
                        :text="errors.find(err => err.includes('Компания'))"
                    />
                </div>

                <div class="quality__form-send">
                    <Button
                        text="Отправить сообщение"
                        class="quality__form-button"
                        @click.prevent.stop="sendMessage"
                    />
                    <div class="quality__form-confirm">
                        <Checkbox v-model="payload.agree" />
                        <p
                            class="quality__form-confirm-p red"
                            v-if="errors.find(err => err.includes('вы должны согласиться'))"
                        >
                            {{ errors.find(err => err.includes('вы должны согласиться')) }}
                        </p>
                        <p class="quality__form-confirm-p" v-else>
                            Я соглашаюсь с политикой конфиденциальности и даю согласие на
                            обработку персональных данных
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

    import Button from "@/shared-ui/ui/Button.vue";
    import Input from "@/shared-ui/ui/Input.vue";
    import Checkbox from "@/shared-ui/ui/CheckBox.vue";
    import Label from "@/shared-ui/ui/Label.vue";
    import InputInvalidMessage from "@/shared-ui/ui/InputInvalidMessage.vue";

    import { useForm } from "@/composables/useForm.js";

    const props = defineProps({
        type: String
    })

    const payload = reactive({
        name: '',
        phone: '',
        email: props.type === 'extended' ? '' : null,
        company: props.type === 'extended' ? '' : null,
        agree: false,
    });

    const { errors, sendMessage } = useForm(payload);
    
</script>

<style lang="scss">
    @import "@/assets/styles/ui/shared/features/forms/quality-form.scss";
</style>
