import {useEffect} from "react";


useEffect(() => {
    const timer = setInterval(() => {
        console.log('Таймер работает');
    }, 1000);
    return () => clearInterval(timer); // Очистка таймера при размонтировании
}, []);
