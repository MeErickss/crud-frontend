import { NavLink } from "react-router-dom";
import hyrax from "../assets/hyrax.jpg";
import lain from "../assets/lain.jpeg";

export function Sidebar() {
    return (
        <div
            className="w-72 h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${hyrax})` }}
        >
            <div className="absolute inset-0 bg-opacity-80"></div>

            <div className="relative z-10 flex flex-col h-full text-white">
                <header className="flex flex-col items-center mt-5">
                    <h1 className="text-2xl">
                        <strong>CRUD OPERATIONS</strong>
                    </h1>
                    <div
                        className="w-32 h-32 mt-5 rounded-full bg-cover bg-center border-4 border-white"
                        style={{ backgroundImage: `url(${lain})` }}
                    />
                    <h3 className="text-xl mt-3">
                        <strong>Nome</strong>
                    </h3>
                    <p className="text-gray-300">Admin</p>
                </header>

                <main className="flex flex-col items-center mt-10 gap-5">
                    <NavLink to="/home" className="w-2/3 h-12 bg-white text-black hover:opacity-90 opacity-80 rounded-sm flex justify-center items-center gap-2">
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_24)">
                                <path d="M18.9171 7.30102L10.2457 0.264952C10.035 0.0927557 9.77185 -0.00123024 9.50042 -0.00123024C9.229 -0.00123024 8.96583 0.0927557 8.7551 0.264952L0.0837115 7.30102C0.060804 7.31944 0.0417585 7.34225 0.0276807 7.36813C0.0136029 7.39401 0.00477327 7.42245 0.00170444 7.4518C-0.00136439 7.48114 0.00138873 7.51081 0.00980395 7.53908C0.0182192 7.56734 0.0321288 7.59364 0.0507254 7.61645L0.519128 8.19751C0.537742 8.22064 0.560703 8.23984 0.586698 8.25403C0.612693 8.26822 0.641212 8.27711 0.670623 8.28019C0.700034 8.28328 0.729761 8.28049 0.758103 8.272C0.786444 8.26351 0.812845 8.24948 0.835795 8.23071L2.11137 7.19511V16.4681C2.11137 16.609 2.16697 16.7441 2.26595 16.8437C2.36493 16.9434 2.49917 16.9993 2.63915 16.9993H16.3614C16.5013 16.9993 16.6356 16.9434 16.7346 16.8437C16.8335 16.7441 16.8891 16.609 16.8891 16.4681V7.19843L18.169 8.23735C18.2154 8.27518 18.2748 8.29292 18.3342 8.2867C18.3935 8.28047 18.448 8.25078 18.4857 8.20415L18.9538 7.6231C18.9894 7.57477 19.0055 7.51459 18.9987 7.45478C18.9919 7.39496 18.9627 7.33999 18.9171 7.30102ZM7.91692 15.9368V10.6243H11.0836V15.9368H7.91692ZM15.8336 15.9368H12.1391V10.0931C12.1391 9.95218 12.0835 9.81705 11.9846 9.71743C11.8856 9.6178 11.7513 9.56183 11.6114 9.56183H7.38915C7.24917 9.56183 7.11493 9.6178 7.01595 9.71743C6.91697 9.81705 6.86137 9.95218 6.86137 10.0931V15.9368H3.16692V6.33847L9.35875 1.31151C9.39783 1.27931 9.44678 1.26171 9.49729 1.26171C9.5478 1.26171 9.59675 1.27931 9.63583 1.31151L15.8336 6.34112V15.9368Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_24">
                                    <rect width="19" height="17" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        Home
                    </NavLink>
                    <NavLink to="/pagamento" className="w-2/3 h-12 bg-white text-black hover:opacity-90 opacity-80 rounded-sm flex justify-center items-center gap-2">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.84933 8.32402L6.43862 7.65332C6.03348 7.54043 5.74888 7.1752 5.74888 6.7668C5.74888 6.25879 6.17745 5.84375 6.70312 5.84375H8.20982C8.58482 5.84375 8.94308 5.96328 9.23437 6.1791C9.34152 6.25879 9.48884 6.24551 9.58259 6.15254L9.96094 5.7707C10.0748 5.65781 10.0614 5.47188 9.93415 5.37227C9.44531 4.98711 8.84263 4.77793 8.20647 4.77793H8.03571V3.4498C8.03571 3.30371 7.91518 3.18418 7.76786 3.18418H7.23214C7.08482 3.18418 6.96429 3.30371 6.96429 3.4498V4.77793H6.70312C5.58817 4.77793 4.67745 5.66777 4.67745 6.76348C4.67745 7.64668 5.28348 8.43027 6.14732 8.67266L8.55804 9.34336C8.96317 9.45625 9.24777 9.82148 9.24777 10.2299C9.24777 10.7379 8.8192 11.1529 8.29353 11.1529H6.78683C6.41183 11.1529 6.05357 11.0334 5.76228 10.8176C5.65513 10.7379 5.50781 10.7512 5.41406 10.8441L5.03571 11.226C4.92187 11.3389 4.93527 11.5248 5.0625 11.6244C5.55134 12.0096 6.15402 12.2188 6.79018 12.2188H6.96429V13.5469C6.96429 13.693 7.08482 13.8125 7.23214 13.8125H7.76786C7.91518 13.8125 8.03571 13.693 8.03571 13.5469V12.2188H8.29688C9.41183 12.2188 10.3225 11.3289 10.3225 10.2332C10.3192 9.35 9.71652 8.56641 8.84933 8.32402ZM13.3929 1.0625H1.60714C0.719866 1.0625 0 1.77637 0 2.65625V14.3438C0 15.2236 0.719866 15.9375 1.60714 15.9375H13.3929C14.2801 15.9375 15 15.2236 15 14.3438V2.65625C15 1.77637 14.2801 1.0625 13.3929 1.0625ZM13.9286 14.3438C13.9286 14.6359 13.6875 14.875 13.3929 14.875H1.60714C1.3125 14.875 1.07143 14.6359 1.07143 14.3438V2.65625C1.07143 2.36406 1.3125 2.125 1.60714 2.125H13.3929C13.6875 2.125 13.9286 2.36406 13.9286 2.65625V14.3438Z" fill="black" />
                        </svg>

                        
                        Pagamento
                    </NavLink>
                    <NavLink to="/estudante" className="w-2/3 h-12 bg-white text-black hover:opacity-90 opacity-80 rounded-sm flex justify-center items-center gap-2">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.13 4.81219L10.8488 2.13469C10.2922 1.955 9.70813 1.955 9.15156 2.13469L0.870313 4.81219C0.341875 4.98313 0 5.44938 0 6C0 6.55063 0.341875 7.01688 0.87 7.18781L1.79844 7.48781C1.69531 7.68094 1.61906 7.88875 1.56938 8.10656C1.23531 8.26844 1 8.60375 1 9C1 9.39781 1.23656 9.735 1.57281 9.89594L1.00875 13.3916C0.958437 13.7038 1.13094 14 1.36312 14H2.63656C2.86875 14 3.04156 13.7038 2.99094 13.3916L2.42719 9.89594C2.76344 9.735 3 9.39781 3 9C3 8.66875 2.82844 8.38938 2.58031 8.20719C2.62687 8.06156 2.69906 7.93031 2.78562 7.80688L4.45656 8.34719L4 12C4 13.1047 6.68625 14 10 14C13.3138 14 16 13.1047 16 12L15.5434 8.34719L19.13 7.1875C19.6581 7.01688 20 6.55063 20 6C20 5.44938 19.6581 4.98313 19.13 4.81219ZM14.9838 11.9331C14.6475 12.2872 12.9388 13 10 13C7.06125 13 5.3525 12.2872 5.01625 11.9331L5.42531 8.66031L9.15156 9.865C9.23281 9.89125 9.95531 10.1534 10.8488 9.865L14.575 8.66031L14.9838 11.9331ZM18.8213 6.23688L10.54 8.91438C10.1866 9.02875 9.81344 9.02875 9.46 8.91438L3.97031 7.13938L10.0919 5.99125C10.3634 5.94063 10.5422 5.67938 10.4913 5.40781C10.4406 5.13594 10.1737 4.95813 9.90812 5.00875L3.54 6.2025C3.1525 6.275 2.80531 6.44156 2.50625 6.66594L1.17844 6.23656C0.933125 6.15688 0.945312 5.83844 1.17844 5.76313L9.45969 3.08563C9.93156 2.93313 10.3297 3.01781 10.5397 3.08563L18.8209 5.76313C19.0519 5.83781 19.0681 6.15688 18.8213 6.23688Z" fill="black" />
                        </svg>

                        Estudante
                    </NavLink>
                </main>

                <footer className="flex justify-center mt-auto mb-5">
                    <NavLink to="/" className="w-2/3 h-12 bg-white text-black hover:opacity-90 opacity-80 rounded-sm flex justify-center items-center gap-2">
                        Logout
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z" fill="black" />
                        </svg>

                    </NavLink>
                </footer>
            </div>
        </div>
    );
}
