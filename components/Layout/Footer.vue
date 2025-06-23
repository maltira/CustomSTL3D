<template>
    <div class="footer">
        <div class="top-footer">
            <div class="title_footer">
                <h1>CustomSTL3D</h1>
                <p>A library of 3D models for your project </p>
            </div>
            <a href="example@gmail.com">example@gmail.com</a>
        </div>
        <div class="divider"></div>
        <div class="bottom-footer">
            <p>© CustomSTL3D 2025 — All rights reserved</p>
            <div class="footer-links">
                <a href="#">User Agreement</a>
                <a href="#">Privacy policy</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer{
    padding: 50px $pd;
    background: rgba(255, 255, 255, 0.10);
}
.top-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    & a {
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 26.4px */
        opacity: 0.8;

        &:hover{
            opacity: 1;
        }
    }
}
.title_footer{

    & h1 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 5px;
    }
    & p {
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
        opacity: 0.7;
    }
}
.divider{
    margin: 30px 0 40px 0;
    height: 1px;
    background: #fff;
    opacity: 0.1;
}
.bottom-footer{
    display: flex;
    justify-content: space-between;
    & p {
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        opacity: 0.7;
    }
    & .footer-links{
        display: flex;
        gap: 25px;

        & a {
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 19.6px */
            opacity: 0.7;

            &:hover{
                opacity: 1;
            }
        }
    }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
    .footer{
        padding: 50px 90px;
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .footer{
        padding: 50px 60px;
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .footer{
        padding: 50px 30px;
    }
}
@media screen and (max-width: 559px){
    .footer{
        padding: 50px 16px;
    }
    .top-footer{
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    .divider{
        margin: 20px 0 30px 0;
    }
    .bottom-footer{
        flex-direction: column;
        align-items: center;
        gap: 10px;

        & p {
            opacity: 1;
        }
    }
    .footer-links a {
        opacity: 1 !important;
    }
}
</style>