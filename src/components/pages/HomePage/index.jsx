import { Box, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Box>
            <Typography component={"span"}>  
{`Створити форму за допомогою форми з наступними полями:
ім'я, обов'язкове для заповнення;
електронна пошта, обов'язкове для заповнення, формат email;
телефон, обов'язкове до заповнення, тільки цифри та довжина 12.
Провалідувати всі поля і вивести повідомлення у відповідь`}
            </Typography>
        </Box>
    )
}