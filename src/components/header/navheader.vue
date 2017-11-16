<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a asp-page="/Index" class="navbar-brand">VueWasteSnake</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a asp-page="/Index">Home</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  template: "<navheader/>"
};
</script>

<style scoped>

</style>