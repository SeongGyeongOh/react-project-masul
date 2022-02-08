export type iconName = 'community' | 'menu' | 'alcholcup' | 'login' | 'home' | 'recommend' | 'garbage' | 'modify';

type icon = {
  path: string;
  viewBox: string;
};

const IconSet: Record<iconName, icon> = {
  community: {
    path: 'M15.5266 1.25H8.47337H8.47336C7.79704 1.25 7.25149 1.24999 6.80748 1.28029C6.35092 1.31144 5.94721 1.37711 5.56494 1.53545C4.64608 1.91605 3.91605 2.64608 3.53545 3.56494C3.37711 3.94721 3.31144 4.35092 3.28029 4.80748C3.24999 5.25149 3.24999 5.79705 3.25 6.47337V17.5266C3.24999 18.203 3.24999 18.7485 3.28029 19.1925C3.31144 19.6491 3.37711 20.0528 3.53545 20.4351C3.91605 21.3539 4.64608 22.0839 5.56494 22.4645C5.94721 22.6229 6.35092 22.6886 6.80748 22.7197C7.25149 22.75 7.79704 22.75 8.47336 22.75H15.5266C16.203 22.75 16.7485 22.75 17.1925 22.7197C17.6491 22.6886 18.0528 22.6229 18.4351 22.4645C19.3539 22.0839 20.0839 21.3539 20.4645 20.4351C20.6229 20.0528 20.6886 19.6491 20.7197 19.1925C20.75 18.7485 20.75 18.203 20.75 17.5266V6.47336C20.75 5.79704 20.75 5.25149 20.7197 4.80748C20.6886 4.35092 20.6229 3.94721 20.4645 3.56494C20.0839 2.64608 19.3539 1.91605 18.4351 1.53545C18.0528 1.37711 17.6491 1.31144 17.1925 1.28029C16.7485 1.24999 16.203 1.25 15.5266 1.25H15.5266ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H16C16.4142 15.25 16.75 15.5858 16.75 16C16.75 16.4142 16.4142 16.75 16 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16Z',
    viewBox: '0 0 24 24',
  },
  menu: {
    path: 'M17.8842 1.24996H18.1158C18.9337 1.24969 19.4919 1.24951 19.9706 1.37777C21.2647 1.72452 22.2755 2.73532 22.6222 4.02942C22.7505 4.50807 22.7503 5.06621 22.75 5.88416V6.11579C22.7503 6.93373 22.7505 7.49191 22.6222 7.97056C22.2755 9.26466 21.2647 10.2755 19.9706 10.6222C19.4919 10.7505 18.9338 10.7503 18.1158 10.75L15.9552 10.75C15.5224 10.75 15.1256 10.7501 14.8028 10.7067C14.4473 10.6589 14.0716 10.5464 13.7626 10.2374C13.4535 9.9284 13.3411 9.55268 13.2933 9.1972C13.2499 8.87439 13.2499 8.47757 13.25 8.04477L13.25 5.88419C13.2497 5.06623 13.2495 4.50808 13.3778 4.02942C13.7245 2.73532 14.7353 1.72452 16.0294 1.37777C16.5081 1.24951 17.0662 1.24969 17.8842 1.24996Z M5.63425 1.24996H5.86584C6.68381 1.24969 7.24196 1.24951 7.72062 1.37777C9.01472 1.72452 10.0255 2.73532 10.3723 4.02942C10.5005 4.50808 10.5003 5.06623 10.5001 5.88419L10.5001 8.04473C10.5001 8.47753 10.5002 8.87439 10.4567 9.1972C10.409 9.55268 10.2965 9.9284 9.98749 10.2374C9.67846 10.5464 9.30274 10.6589 8.94726 10.7067C8.62446 10.7501 8.22764 10.75 7.79484 10.75L5.63425 10.75C4.81629 10.7503 4.25814 10.7505 3.77948 10.6222C2.48538 10.2755 1.47458 9.26466 1.12783 7.97056C0.999571 7.4919 0.999755 6.93375 1.00002 6.11578V5.88419C0.999755 5.06623 0.999571 4.50808 1.12783 4.02942C1.47458 2.73532 2.48538 1.72452 3.77948 1.37777C4.25814 1.24951 4.81629 1.24969 5.63425 1.24996Z M19.9706 13.3778C19.4919 13.2495 18.9337 13.2497 18.1158 13.25L15.9552 13.25C15.5224 13.2499 15.1256 13.2499 14.8028 13.2933C14.4473 13.3411 14.0716 13.4535 13.7626 13.7626C13.4535 14.0716 13.3411 14.4473 13.2933 14.8028C13.2499 15.1256 13.2499 15.5224 13.25 15.9552L13.25 18.1158C13.2497 18.9337 13.2495 19.4919 13.3778 19.9706C13.7245 21.2647 14.7353 22.2755 16.0294 22.6222C16.5081 22.7505 17.0662 22.7503 17.8842 22.75H18.1158C18.9337 22.7503 19.4919 22.7505 19.9706 22.6222C21.2647 22.2755 22.2755 21.2647 22.6222 19.9706C22.7505 19.4919 22.7503 18.9338 22.75 18.1158V17.8842C22.7503 17.0662 22.7505 16.5081 22.6222 16.0294C22.2755 14.7353 21.2647 13.7245 19.9706 13.3778Z M5.63424 13C4.81629 12.9998 4.25814 12.9996 3.77948 13.1278C2.48538 13.4746 1.47458 14.4854 1.12783 15.7795C0.99957 16.2581 0.999754 16.8163 1.00002 17.6343V17.8658C0.999754 18.6838 0.99957 19.242 1.12783 19.7206C1.47458 21.0147 2.48538 22.0255 3.77948 22.3723C4.25813 22.5005 4.81628 22.5003 5.63422 22.5001H5.86585C6.68379 22.5003 7.24197 22.5005 7.72062 22.3723C9.01472 22.0255 10.0255 21.0147 10.3723 19.7206C10.5005 19.242 10.5003 18.6838 10.5001 17.8658L10.5001 15.7053C10.5001 15.2725 10.5001 14.8756 10.4567 14.5528C10.409 14.1974 10.2965 13.8216 9.98749 13.5126C9.67846 13.2036 9.30274 13.0911 8.94726 13.0433C8.62445 12.9999 8.22762 13 7.79481 13L5.63424 13Z',
    viewBox: '0 0 24 24',
  },
  alcholcup: {
    path: 'M5.25 3.67924C5.25 2.88989 5.88989 2.25 6.67924 2.25H17.3208C18.1101 2.25 18.75 2.8899 18.75 3.67925V4.25H22C22.4142 4.25 22.75 4.58579 22.75 5L22.75 7.18066C22.7505 8.2801 22.7509 9.03483 22.5075 9.67833C22.1841 10.5332 21.5597 11.2406 20.7515 11.6675C20.1431 11.9888 19.3942 12.0821 18.3032 12.218L18.093 12.2442C18.035 12.2515 17.9769 12.2518 17.9199 12.2457C16.8863 14.1268 14.9822 15.462 12.75 15.7088V17.3096C13.1156 17.3681 13.4741 17.4692 13.8177 17.6116C14.394 17.8503 14.9177 18.2002 15.3588 18.6412C15.7998 19.0823 16.1497 19.606 16.3884 20.1823C16.6271 20.7586 16.75 21.3762 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58578 22.75 7.25 22.4142 7.25 22C7.25 21.3762 7.37286 20.7586 7.61157 20.1823C7.85028 19.606 8.20016 19.0823 8.64124 18.6412C9.08232 18.2002 9.60596 17.8503 10.1823 17.6116C10.5259 17.4692 10.8844 17.3681 11.25 17.3096V15.7088C9.01783 15.462 7.1137 14.1268 6.08013 12.2457C6.02305 12.2518 5.96497 12.2515 5.90697 12.2442L5.69681 12.218C4.6058 12.0821 3.85686 11.9888 3.24852 11.6675C2.44033 11.2406 1.81588 10.5332 1.49252 9.67833C1.24912 9.03483 1.24946 8.2801 1.24995 7.18066L1.25 5C1.25 4.58579 1.58578 4.25 2 4.25H5.25V3.67924Z',
    viewBox: '0 0 24 24',
  },
  home: {
    path: 'M3.07726 9.79082C3 10.1246 3 10.4834 3 11.2009V17.5C3 18.8978 3 19.5968 3.22836 20.1481C3.53284 20.8831 4.11687 21.4672 4.85195 21.7717C5.40326 22 6.10218 22 7.5 22H9V17C9 15.3432 10.3431 14 12 14C13.6569 14 15 15.3432 15 17V22H16.5C17.8978 22 18.5967 22 19.1481 21.7717C19.8831 21.4672 20.4672 20.8831 20.7716 20.1481C21 19.5968 21 18.8978 21 17.5V11.2009C21 10.4834 21 10.1246 20.9227 9.79082C20.8197 9.34573 20.6164 8.93006 20.3283 8.57549C20.1123 8.30957 19.8291 8.08931 19.2627 7.64881L14.7627 4.14881C13.8855 3.46651 13.4469 3.12536 12.9736 2.96298C12.3426 2.74647 11.6574 2.74647 11.0264 2.96298C10.5531 3.12536 10.1145 3.46651 9.23727 4.1488L4.73727 7.64881C4.1709 8.08931 3.88772 8.30957 3.67165 8.57549C3.38357 8.93006 3.18027 9.34573 3.07726 9.79082Z',
    viewBox: '0 0 24 24',
  },
  login: {
    path: 'M12 1.25C8.82436 1.25 6.25 3.82436 6.25 7C6.25 10.1756 8.82436 12.75 12 12.75C15.1756 12.75 17.75 10.1756 17.75 7C17.75 3.82436 15.1756 1.25 12 1.25Z M8.26996 14.25C7.98939 14.25 7.79651 14.2499 7.61443 14.2677C6.38133 14.3879 5.28717 15.1094 4.69096 16.1954C4.60293 16.3558 4.52697 16.5331 4.41648 16.791L4.36678 16.9069C4.13585 17.4455 3.98127 17.8059 3.90734 18.1077C3.38798 20.2277 4.78185 22.3416 6.93502 22.6993C7.24151 22.7502 7.63373 22.7501 8.21971 22.75H15.7803C16.3663 22.7501 16.7585 22.7502 17.065 22.6993C19.2182 22.3416 20.6121 20.2277 20.0927 18.1077C20.0188 17.806 19.8642 17.4455 19.6333 16.907L19.5835 16.7909C19.4731 16.5331 19.3971 16.3558 19.3091 16.1954C18.7129 15.1094 17.6187 14.3879 16.3856 14.2677C16.2035 14.2499 16.0106 14.25 15.7301 14.25H8.26996Z',
    viewBox: '0 0 24 24',
  },
  recommend: {
    path: 'M13.3704 1.58957C12.5219 1.10182 11.4781 1.10182 10.6295 1.58957C10.25 1.80773 9.96249 2.1493 9.69782 2.53282C9.43473 2.91403 9.13955 3.42084 8.77541 4.04604L8.13787 5.14064C7.90424 5.54175 7.83834 5.64743 7.76327 5.73048C7.64689 5.85924 7.50496 5.96236 7.34654 6.03326C7.24435 6.07899 7.12349 6.109 6.66981 6.20724L5.43179 6.47533C4.72467 6.62845 4.15143 6.75258 3.70757 6.88499C3.26104 7.01819 2.84734 7.18606 2.52258 7.4796C1.79649 8.13589 1.47392 9.12863 1.67559 10.0864C1.76579 10.5147 2.00181 10.8937 2.28476 11.2639C2.56602 11.632 2.95681 12.0693 3.43888 12.6088L4.2829 13.5534C4.59218 13.8996 4.67232 13.9949 4.72811 14.0919C4.81461 14.2424 4.86882 14.4093 4.88729 14.5818C4.89921 14.6932 4.8904 14.8174 4.84364 15.2792L4.71604 16.5395C4.64315 17.2593 4.58406 17.8429 4.57283 18.3059C4.56153 18.7717 4.59335 19.2171 4.77216 19.6166C5.17196 20.51 6.01643 21.1236 6.98961 21.2277C7.42489 21.2743 7.85824 21.1669 8.2978 21.0122C8.73472 20.8585 9.27143 20.622 9.93351 20.3302L11.0927 19.8194C11.5174 19.6322 11.6329 19.5854 11.7424 19.5624C11.9123 19.5266 12.0877 19.5266 12.2575 19.5624C12.3671 19.5854 12.4825 19.6322 12.9073 19.8194L14.0664 20.3302C14.7285 20.622 15.2652 20.8585 15.7021 21.0122C16.1417 21.1669 16.5751 21.2743 17.0103 21.2277C17.9835 21.1236 18.828 20.51 19.2278 19.6166C19.4066 19.2171 19.4384 18.7717 19.4271 18.3059C19.4159 17.8429 19.3568 17.2593 19.2839 16.5395L19.1563 15.2792C19.1095 14.8174 19.1007 14.6932 19.1127 14.5818C19.1311 14.4093 19.1853 14.2424 19.2718 14.0919C19.3276 13.9949 19.4078 13.8996 19.7171 13.5534L20.5611 12.6088C21.0432 12.0693 21.4339 11.6319 21.7152 11.2639C21.9981 10.8937 22.2342 10.5147 22.3244 10.0864C22.526 9.12863 22.2035 8.13589 21.4774 7.4796C21.1526 7.18606 20.7389 7.01819 20.2924 6.88499C19.8485 6.75258 19.2753 6.62846 18.5682 6.47534L17.3301 6.20725C16.8765 6.109 16.7556 6.07899 16.6534 6.03326C16.495 5.96236 16.3531 5.85924 16.2367 5.73048C16.1616 5.64743 16.0957 5.54175 15.8621 5.14064L15.2246 4.04607C14.8604 3.42088 14.5652 2.91403 14.3021 2.53282C14.0375 2.1493 13.75 1.80773 13.3704 1.58957Z M19.6414 17.1603C19.9148 14.8227 20.0018 12.4688 19.9023 10.1208C19.8976 10.0084 19.9399 9.89898 20.0194 9.81942L21.0027 8.83609C21.1236 8.71519 21.3302 8.79194 21.3415 8.96254C21.5265 11.7522 21.4564 14.5545 21.1312 17.3346C20.8946 19.3571 19.2703 20.9421 17.2583 21.167C13.7917 21.5544 10.2083 21.5544 6.74177 21.167C4.72971 20.9421 3.10538 19.3571 2.86883 17.3346C2.45429 13.7903 2.45429 10.2097 2.86883 6.66543C3.10538 4.6429 4.72971 3.05789 6.74177 2.83301C9.37152 2.5391 12.0685 2.46815 14.7306 2.62016C14.9022 2.62996 14.9804 2.83757 14.8589 2.95909L13.8664 3.95165C13.7877 4.03034 13.6798 4.07261 13.5685 4.06885C11.3421 3.99376 9.10055 4.07872 6.90838 4.32373C5.57827 4.47239 4.51278 5.522 4.35867 6.83968C3.95767 10.2682 3.95767 13.7318 4.35867 17.1603C4.51278 18.478 5.57827 19.5276 6.90838 19.6763C10.2642 20.0513 13.7358 20.0513 17.0916 19.6763C18.4218 19.5276 19.4872 18.478 19.6414 17.1603Z',
    viewBox: '0 0 24 24',
  },
  garbage: {
    path: 'M10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V3.75H5C4.58579 3.75 4.25 4.08579 4.25 4.5C4.25 4.91421 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H14.75V3C14.75 2.58579 14.4142 2.25 14 2.25H10Z M10 10.65C10.4142 10.65 10.75 10.9858 10.75 11.4L10.75 18.4C10.75 18.8142 10.4142 19.15 10 19.15C9.58579 19.15 9.25 18.8142 9.25 18.4L9.25 11.4C9.25 10.9858 9.58579 10.65 10 10.65Z M14.75 11.4C14.75 10.9858 14.4142 10.65 14 10.65C13.5858 10.65 13.25 10.9858 13.25 11.4V18.4C13.25 18.8142 13.5858 19.15 14 19.15C14.4142 19.15 14.75 18.8142 14.75 18.4V11.4Z M14.75 11.4C14.75 10.9858 14.4142 10.65 14 10.65C13.5858 10.65 13.25 10.9858 13.25 11.4V18.4C13.25 18.8142 13.5858 19.15 14 19.15C14.4142 19.15 14.75 18.8142 14.75 18.4V11.4Z M5.99142 7.91718C6.03363 7.53735 6.35468 7.25 6.73684 7.25H17.2632C17.6453 7.25 17.9664 7.53735 18.0086 7.91718L18.2087 9.71852C18.5715 12.9838 18.5715 16.2793 18.2087 19.5446L18.189 19.722C18.045 21.0181 17.0404 22.0517 15.7489 22.2325C13.2618 22.5807 10.7382 22.5807 8.25108 22.2325C6.95954 22.0517 5.955 21.0181 5.81098 19.722L5.79128 19.5446C5.42846 16.2793 5.42846 12.9838 5.79128 9.71852L5.99142 7.91718ZM7.40812 8.75L7.2821 9.88417C6.93152 13.0394 6.93152 16.2238 7.2821 19.379L7.3018 19.5563C7.37011 20.171 7.84652 20.6612 8.45905 20.747C10.8082 21.0758 13.1918 21.0758 15.5409 20.747C16.1535 20.6612 16.6299 20.171 16.6982 19.5563L16.7179 19.379C17.0685 16.2238 17.0685 13.0394 16.7179 9.88417L16.5919 8.75H7.40812Z',
    viewBox: '0 0 24 24',
  },
  modify: {
    path: 'M21.4549 5.41575C21.6471 5.70687 21.615 6.10248 21.3588 6.35876L12.1664 15.5511C12.0721 15.6454 11.9545 15.7128 11.8256 15.7465L7.99716 16.7465C7.87229 16.7791 7.74358 16.7784 7.62265 16.7476C7.49408 16.7149 7.37431 16.6482 7.27729 16.5511C7.08902 16.3629 7.01468 16.0889 7.08197 15.8313L8.08197 12.0028C8.11144 11.89 8.16673 11.7786 8.24322 11.6912L17.4697 2.46967C17.5504 2.38891 17.6477 2.32846 17.7536 2.29163C17.8321 2.26432 17.9153 2.25 18 2.25C18.1989 2.25 18.3897 2.32902 18.5303 2.46967L21.3588 5.2981C21.3954 5.33471 21.4274 5.37416 21.4549 5.41575ZM19.7678 5.82843L18 4.06066L9.48184 12.5788L8.85685 14.9716L11.2496 14.3466L19.7678 5.82843Z ',
    viewBox: '0 0 24 24',
  },
};

export { IconSet };