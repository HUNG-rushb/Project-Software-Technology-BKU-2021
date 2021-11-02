<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="wrap">
                    <img src="https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg?size=626&ext=jpg&ga=GA1.2.1686565817.1634083200" alt="">
                    <div class="msg">
                        <p>Cám ơn bạn đã gửi đánh giá nhà hàng chúng mình!</p>
                        <p>Mong bạn đã có những trải nghiệm vui vẻ tại đây!</p>
                    </div>
                    <router-link to="/" class="close">&#10005;</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80%;
    margin: auto;
    padding: 24px 16px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 6px;
    border: 1px solid #ddd;
}
img {
    width: 300px;
    margin-bottom: 20px;
}
.msg p {
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
.close {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 30px;
    text-decoration: none;
}
</style>