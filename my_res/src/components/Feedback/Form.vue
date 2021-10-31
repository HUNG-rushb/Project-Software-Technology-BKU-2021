<template>
    <form action="" method="POST" class="form" id="form-1">
        <h1 class="heading">Đánh giá chất lượng</h1>
        <div class="spacer"></div>
        
        <div class="rating">
            <i class="rating__star bi bi-star-fill"></i>
            <i class="rating__star bi bi-star-fill"></i>
            <i class="rating__star bi bi-star-fill"></i>
            <i class="rating__star bi bi-star"></i>
            <i class="rating__star bi bi-star"></i>
        </div>
        <div class="spacer"></div>
        
        <div class="form-group">
            <label for="fullname" class="form-label">
                Tên của bạn
                <span style="color: red;">*</span>
            </label>
            <input id="fullname" name="fullname" type="text" placeholder="Nhập vào tên của bạn" class="form-control">
            <span class="form-message"></span>
        </div>
        
        <div class="form-group">
            <label for="email" class="form-label">
                Số điện thoại của bạn
                <span style="color: red;">*</span>
            </label>
            <input id="phone" name="phone" type="tel" placeholder="Nhập vào số điện thoại của bạn" class="form-control">
            <span class="form-message"></span>
        </div>
        
        <div class="form-group">
            <label for="floatingTextarea" class="form-label">Đánh giá chi tiết về nhà hàng</label>
            <textarea class="form-control" placeholder="Nhập vào chi tiết đánh giá" id="floatingTextarea"></textarea>
        </div>
        
        <div class="form-group">
            <div class="row g-0">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <button class="form-submit cancel">Hủy</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <button class="form-submit send">Gửi</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    // Validator({
    //     form: '#form-1',
    //     errorSelector: '.form-message',
    //     rules: [
    //         Validator.isRequired('#fullname', 'Vui lòng nhập tên của bạn'),
    //         Validator.isRequired('#phone', 'Vui lòng nhập vào số điện thoại của bạn'),
    //         // Validator.isEmail('#email'),
    //         // Validator.minLength('#password', 6),
    //         // Validator.isRequired('#password_confirmation'),
    //         // Validator.isConfirmed('#password_confirmation', function () {
    //         //     return document.querySelector('#form-1 #password').value;
    //         // }, 'Mật khẩu nhập lại không chính xác'),
    //     ]
    // })

    // const ratingStars = [...document.querySelectorAll('.rating__star')]
    // console.log(ratingStars);

    // function executeRating(stars) {
    //     const starClassActive = "rating__star active-star";
    //     const starClassInactive = "rating__star inactive-star";
    //     const starsLength = stars.length;
    //     let i;
    //     stars.map((star) => {
    //         star.onclick = () => {
    //             i = stars.indexOf(star);
                
    //             // console.log(star.textContent)
    //             if (star.className === starClassInactive) {
    //                 for (i; i >= 0; --i) stars[i].className = starClassActive;
    //             } else {
    //                 for (i=i+1; i < starsLength; i++) stars[i].className = starClassInactive;
    //             }
    //         };
    //     });
    // }
    // executeRating(ratingStars);
    
</script>

<style scoped>
.form {
    padding: 32px 24px;
    margin: auto;
    text-align: center;
}
.form .heading {
    font-size: 30px;
}
.spacer {
    margin-top: 24px;
}
.rating {
    display: flex;
    justify-content: center;
    align-items: center;
}
.rating__star {
    font-size: 40px;
    color: #fece00;
    margin-right: 4px;
}
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.form-label, .form-message {
    text-align: left;
}
.form-label {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    padding-bottom: 8px;
    margin: 0;
}
.form-control {
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #b3b3b3;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
}
.form-control:hover {
    border-color: #1dbfaf;
}
.form-group.invalid .form-control,
.form-group.invalid .form-message {
    border-color: #f33a58;
}
.form-message {
    font-size: 12px;
    line-height: 16px;
    padding: 4px 0 0;
}
.form-submit {
    padding: 10px 36px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 14px;
    outline: none;
    color: #fff;
    border-radius: 8px;
    border: none;
}
.form-submit.cancel {
    background-color: #636d77;
}
.form-submit.cancel:hover {
    background-color: #6f757a;
}
.form-submit.send {
    background-color: #1dbfaf;
}
.form-submit.send:hover {
    background-color: #1ac7b6;
}
#floatingTextarea {
    resize: none;
    height: 120px;
}
@media screen and (min-width: 992px) {
    .form {
        width: 90%;
    }
}
@media screen and (max-width: 768px) {
    .form-submit {
        width: 100%;
    }
}
</style>