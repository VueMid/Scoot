<template>
    <div class="footer__icon flex flex-row justify-center items-center gap-6 mt-[85px] mb-[88px] md:mt-[35px] md:mb-[35px]">
        <router-link to="" class="footer__icons">
            <i class="fa-brands cursor-pointer fa-square-facebook fa-xl" style="color: #e5ecf4;"></i>
        </router-link>
        <router-link to="" class="footer__icons">
            <i class="fa-brands cursor-pointer fa-twitter fa-xl" style="color: #e5ecf4;"></i>
        </router-link>
        <router-link to="" class="footer__icons">
            <i class="fa-brands cursor-pointer fa-instagram fa-xl" style="color: #e5ecf4;"></i>
        </router-link>
    </div>
</template>
<style>
.footer__icons {
    transition: 240ms ease all;
}

.footer__icons:hover {
    transition: 240ms ease all;
    transform: translateY(-3px);
}

.fa-square-facebook {
    transition: 240ms ease all;
}

.fa-square-facebook:hover {
    color: #FCB72B !important;
    transition: 240ms ease all;
}

.fa-twitter {
    transition: 240ms ease all;
}

.fa-twitter:hover {
    color: #FCB72B !important;
    transition: 240ms ease all;
}

.fa-instagram {
    transition: 240ms ease all;
}

.fa-instagram:hover {
    color: #FCB72B !important;
    transition: 240ms ease all;
}

@media(max-width: 820px) {
    .footer__icons {
        transition: 240ms ease all;
    }

    .footer__icons:hover {
        transition: 240ms ease all;
        transform: none;
    }

    .fa-square-facebook {
        transition: 240ms ease all;
    }

    .fa-square-facebook:active {
        color: #FCB72B !important;
        transition: 240ms ease all;
    }

    .fa-twitter {
        transition: 240ms ease all;
    }

    .fa-twitter:active {
        color: #FCB72B !important;
        transition: 240ms ease all;
    }

    .fa-instagram {
        transition: 240ms ease all;
    }

    .fa-instagram:active {
        color: #FCB72B !important;
        transition: 240ms ease all;
    }
}
</style>    