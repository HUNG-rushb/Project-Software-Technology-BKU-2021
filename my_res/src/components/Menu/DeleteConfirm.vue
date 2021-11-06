<template>
    <div id="container_confirm">
        
        <div class="center">
            <strong>Xác nhận xóa?</strong>
        </div>
        <button class="btn btn-secondary" id="cancel">Hủy</button>
        <button class="btn btn-danger" id="delete">Xóa</button>

    </div>
    
</template>

<script>
export default {
    name: "DeleteConfirm"
}
</script>

<style scoped>
    .center {
        text-align: center;
        margin: 20px 0;
    }
    #container_confirm{
        width: 300px;
        margin: 200px auto;
        border-radius: 10px;
        border: solid black 1px;
    }
    #cancel {
        width: 90px;
        margin: 20px 20px;
        /* background-color: darkgrey; */
    }
    #delete {
    float: right;
    width: 90px;
    margin: 20px 20px;
  }
</style>