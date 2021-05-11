<template>
    <b-button id="btn" size="sm">
        <b-icon icon="plus" aria-hidden="true"></b-icon> Adicionar contato
    </b-button>
</template>

<script>

export default {
    name: 'AddContact',
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    #btn{
        font-family: 'Roboto', sans-serif;
        background-color: #321BDE;
        font-size: 14px;
        border-radius: 8px;
    } 
</style>
