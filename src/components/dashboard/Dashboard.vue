<template>
    <div>
        <h2>Contatos</h2>
        <ContactList/>
    </div>
</template>

<script>
import ContactList from './ContactList'

export default{
    name: 'Dashboard',
    components: {
        ContactList,
    },
}
</script>

<style scoped>

</style>
