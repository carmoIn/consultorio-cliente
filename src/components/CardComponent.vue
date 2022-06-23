<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">{{ title }}</p>
        </div>
        <div class="card-content">
            <div class="content">
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        title: String,
    },
};
</script>

<style scoped></style>
