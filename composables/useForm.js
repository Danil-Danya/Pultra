import { ref } from 'vue';
import { useRoute } from 'vue-router';

import orderService from '@/entities/orders/services.js';


const useForm = (payload) => {
    const errors = ref([]);
    const route = useRoute();
    const config = useRuntimeConfig();

    payload.page = `${config.public.siteBaseURL}${route.path}`;

    const validateForm = () => {
        errors.value = [];

        const { name, phone, agree, email, company } = payload;

        const rules = [
            {
                valid: () => agree,
                message: 'Для продолжения вы должны согласиться с политикой конфиденциальности и дать согласие на обработку персональных данных',
            },
            {
                valid: () => name !== '',
                message: 'Имя не может быть пустым',
            },
            {
                valid: () => phone !== '',
                message: 'Телефон не может быть пустым',
            },
            {
                valid: () => {
                    if (email === '') {
                        return false;
                    }

                    if (email) {
                        return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(email)
                    }

                    return true;
                },
                message: 'Введите корректный email',
            },
            {
                valid: () => company !== '',
                message: 'Компания не может быть пустой',
            },
        ];

        rules.forEach(rule => {
            if (!rule.valid()) {
                errors.value.push(rule.message);
            }
        });

        return errors.value.length === 0;
    };

    const sendMessage = async () => {
        if (!validateForm()) {
            return;
        }

        const message = await orderService.createOrder({ ...payload });

        if (message.status === 201) {
            //window.location.reload();
        }
    };

    return {
        errors,
        sendMessage
    };
};

export { useForm };
