<template>
    <img class="logo" src="../../assets/w.png"/>
    <h1>Sing Up</h1>
    <div class="register">
        
        <input type="number" v-model ="document_id" placeholder="Enter Number Identification"/>
        <input type="text" v-model="first_name" placeholder="Enter First Name"/>
        <input type="text" v-model="last_name" placeholder="Enter Last Name"/>
        <input type="text" v-model="user_type" placeholder="Enter User Type"/>
        <input type="number" v-model="phone" placeholder="Enter Number Phone"/>
        <input type="text" v-model="gender" placeholder="Enter Gender"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="singUp">Sing Up</button>
        
    </div>

</template>

<script>
import axios from 'axios'

//const $form = document.querySelector('#form')
//$form.addEventListener('submit', singUp())
//const formdata = new FormData($form)
export default {
    name: 'Singup',
    data()
    {
        return{
            document_id:'',
            first_name:'', 
            last_name:'',
            document_type:'C.C',
            user_type:'',
            phone:'',
            gender:'',
            email:'',
            password:'',

        }

    },
    methods:{
        async singUp()
        {
            const formdata = new FormData()

            formdata.set('document_id', this.document_id)
            formdata.set('first_name', this.first_name )
            formdata.set('last_name', this.last_name)
            formdata.set('document_type','C.C')
            formdata.set('user_type', this.user_type)
            formdata.set('phone', this.phone)
            formdata.set('gender', this.gender)
            formdata.set('email', this.email)
            formdata.set('password', this.password)

            console.log(this.document_id);
            let result = await axios.post("http://127.0.0.1:3000/users", formdata);

            console.log(result);

            if(result.status == 200){
                alert("sing-up done");
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'Userpage'})
            }
        }

    },
}
</script>

<style scoped>

.logo{
    width: 100px;
    padding-top: 30px;
    display: block;
}

h1{
    text-align: center;
}

.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button{
    width: 320px;
    height: 40px;
    margin-left: auto;
    display: block;
    margin-right: auto;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
.logo{
    width: 100px;
    margin-right: auto;
    margin-left: auto;
}

#app {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-sooothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>