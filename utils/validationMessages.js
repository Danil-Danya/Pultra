const ValidationMessages = {
    phone: {
        required: 'Телефон обязателен',
        minLength: ({ min }: { min: number }) => `Телефон не может быть короче ${min} символов`,
        maxLength: ({ max }: { max: number }) => `Телефон не может быть длиннее ${max} символов`,
        startsWithPlus: 'Телефон должен начинаться с "+"',
    },

    name: {
        required: 'Имя обязательно',
        alpha: 'Имя должно содержать только буквы',
        minLength: ({ min }: { min: number }) => `Имя должно быть не короче ${min} символов`,
    },

    companyName: {
        required: 'Название компании обязательно',
        minLength: ({ min }: { min: number }) => `Минимум ${min} символов`,
        maxLength: ({ max }: { max: number }) => `Максимум ${max} символов`,
    },

    // fallback по умолчанию
    _default: {
        required: 'Поле обязательно для заполнения',
        email: 'Введите корректный email',
        minLength: ({ min }: { min: number }) => `Минимум ${min} символов`,
        maxLength: ({ max }: { max: number }) => `Максимум ${max} символов`,
        sameAs: 'Значения не совпадают',
    },
};


export default ValidationMessages;