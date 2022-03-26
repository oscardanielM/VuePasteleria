<template>
    <footer>
        <div class="grid-footer">
            <div class="grid-item">
                <p>Horarios: Lunes a Viernes de 08:00 am a 05:00 pm</p>
                <p>Tel: (55) 6759-5979</p>
                <p>Direccion: Ixmiquilpan Hgo, Colonia centro</p>
            </div>
            <div class="grid-item">
                <a href="https:www.facebook.com/oscardaniel.matinesgonzalez/" class="colorFace"><i class="fa-brands fa-facebook"></i></a>
                &nbsp; &nbsp; &nbsp;
                <a href="https://wa.me/525567595979/?text=Holi" class="colorWhats"><i
                        class="fa-brands fa-whatsapp"></i></a>
                &nbsp; &nbsp; &nbsp;
                <a href="https://www.instagram.com/oscar.tkd.2/" class="colorInstagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name:"MyFooter"
}
</script>


<style scoped>
footer{
    width: 100% - 2%;
    padding: 2%;
    color: #18F2B2;
    background-color: #140822;
    margin-top: 3%;
}
    .grid-footer{
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;
        font-family: 'Fredoka', sans-serif;
    }

    .grid-footer .grid-item:nth-child(2){
        text-align: center;
    }

    .grid-footer .grid-item:nth-child(2){
        text-align: center;
    }

    .grid-footer .grid-item:nth-child(2) svg{
        text-align: center;
        font-size: 3em;
        padding: 1%;
    }

    .colorFace{
        color: #3b5998;
    }

    .colorInstagram{
        color: #125688;
    }

    .colorWhats{
        color: #4dc247;
    }
</style>