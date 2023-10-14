import Image from "next/image";
import RangRover from "../../../../../public/images/Range-Rover-1.png";
import Link from "next/link";
const ProductCard = ({ item }) => {
  return (
    <li>
      <div className="relative flex  flex-col rounded-2xl bg-white max-w-xl min-w-sm max-h-80 min-h-50 p-5 overflow-clip">
        <div className="product-title flex items-center justify-between ">
          <h4 className="text-xl font-bold">{item.name}</h4>
          <span className="p-2 rounded-full text-gray-500 hover:bg-gray-50 hover:cursor-pointer hover:text-gray-700 transition-colors duration-300">
            <svg
              className="w-6 h-6 "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8164 5.1838L19.8164 5.18386C21.7279 7.095 21.7279 10.207 19.816 12.1182L19.8159 12.1183L11.9997 19.9345L4.18359 12.1183C2.27226 10.2066 2.27205 7.09447 4.18348 5.18342C6.09512 3.27216 9.20731 3.27224 11.1184 5.18337C11.2247 5.28962 11.3257 5.4004 11.422 5.51699L11.9992 6.21548L12.5775 5.5179C12.6749 5.40047 12.7762 5.28905 12.8814 5.18386C14.793 3.2726 17.9052 3.27267 19.8164 5.1838Z"
                stroke="#A4A5A6"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </div>
        <Link href={`/cars/${encodeURIComponent(item.id)}`}>
          {/* product description */}
          <span className="text-gray-500">
            {/* TODO: Implement truncate hook */}
            {item.description.length > 20
              ? item.description.substring(0, 20) + ".."
              : item.description}
          </span>
          <Image
            src={item.car_img}
            blurDataURL={item.car_img}
            placeholder="blur"
            quality={100}
            width={200}
            height={200}
            className="product-img object-scale-down max-w-md mx-auto max-h-32  h-auto w-auto transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 "
            alt={item.name}
          />
          <div className="product-details my-2 flex  justify-between items-center text-[#72767C] ">
            {/* left content */}
            <div className="space-x-2 xs:text-sm sm:text-md md:text-md lg:text-lg ">
              <div className="inline-flex flex-wrap items-center justify-center space-x-1">
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0382 11.0966C13.8552 10.4538 14.4515 9.57234 14.7442 8.57486C15.0369 7.57737 15.0115 6.51346 14.6714 5.53113C14.3312 4.5488 13.6934 3.6969 12.8466 3.09395C11.9998 2.491 10.9861 2.16699 9.94653 2.16699C8.90699 2.16699 7.89329 2.491 7.04647 3.09395C6.19965 3.6969 5.56182 4.5488 5.22171 5.53113C4.8816 6.51346 4.85612 7.57737 5.14883 8.57486C5.44154 9.57234 6.03787 10.4538 6.85486 11.0966C5.45493 11.6574 4.23344 12.5877 3.32061 13.7882C2.40778 14.9886 1.83783 16.4143 1.67153 17.9132C1.65949 18.0227 1.66913 18.1334 1.69988 18.2391C1.73064 18.3448 1.78192 18.4434 1.85079 18.5293C1.98988 18.7028 2.19218 18.8139 2.4132 18.8382C2.63421 18.8626 2.85583 18.7981 3.0293 18.659C3.20277 18.5199 3.31389 18.3176 3.3382 18.0966C3.52118 16.4676 4.29794 14.9631 5.52005 13.8706C6.74216 12.778 8.32395 12.1741 9.9632 12.1741C11.6024 12.1741 13.1842 12.778 14.4063 13.8706C15.6285 14.9631 16.4052 16.4676 16.5882 18.0966C16.6109 18.3013 16.7086 18.4905 16.8625 18.6274C17.0163 18.7644 17.2155 18.8395 17.4215 18.8382H17.5132C17.7316 18.8131 17.9313 18.7027 18.0687 18.5309C18.206 18.3592 18.27 18.1402 18.2465 17.9216C18.0794 16.4184 17.5064 14.9891 16.5889 13.7867C15.6714 12.5844 14.444 11.6545 13.0382 11.0966ZM9.94653 10.5049C9.28726 10.5049 8.64279 10.3094 8.09463 9.94314C7.54647 9.57687 7.11922 9.05627 6.86693 8.44718C6.61464 7.8381 6.54863 7.16787 6.67725 6.52127C6.80586 5.87467 7.12333 5.28072 7.58951 4.81455C8.05568 4.34837 8.64963 4.03091 9.29623 3.90229C9.94283 3.77367 10.6131 3.83968 11.2221 4.09197C11.8312 4.34427 12.3518 4.77151 12.7181 5.31967C13.0844 5.86784 13.2799 6.5123 13.2799 7.17157C13.2799 8.05563 12.9287 8.90347 12.3036 9.5286C11.6784 10.1537 10.8306 10.5049 9.94653 10.5049Z"
                    fill="#A162F7"
                  />
                </svg>

                <span>{item.passengers ? item.passengers : "N/A"}</span>
              </div>
              <div className="inline-flex items-center justify-center space-x-1">
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.58317 15.0837H3.33317V5.91699H9.83317L9.1665 6.58366C8.99984 6.75033 8.9165 6.91699 8.9165 7.16699C8.9165 7.66699 9.24984 8.00033 9.74984 8.00033C9.99984 8.00033 10.1665 7.91699 10.3332 7.75033L12.4165 5.66699C12.7498 5.33366 12.7498 4.83366 12.4165 4.50033L10.3332 2.41699C9.99984 2.08366 9.49984 2.08366 9.1665 2.41699C8.83317 2.75033 8.83317 3.25033 9.1665 3.58366L9.83317 4.25033H2.49984C1.99984 4.25033 1.6665 4.58366 1.6665 5.08366V15.917C1.6665 16.417 1.99984 16.7503 2.49984 16.7503H4.58317C5.08317 16.7503 5.4165 16.417 5.4165 15.917C5.4165 15.417 5.08317 15.0837 4.58317 15.0837ZM17.4998 4.25033H15.4165C14.9165 4.25033 14.5832 4.58366 14.5832 5.08366C14.5832 5.58366 14.9165 5.91699 15.4165 5.91699H16.6665V15.0837H9.6665L10.3332 14.417C10.6665 14.0837 10.6665 13.5837 10.3332 13.2503C9.99984 12.917 9.49984 12.917 9.1665 13.2503L7.08317 15.3337C6.74984 15.667 6.74984 16.167 7.08317 16.5003L9.1665 18.5837C9.33317 18.7503 9.49984 18.8337 9.74984 18.8337C9.99984 18.8337 10.1665 18.7503 10.3332 18.5837C10.6665 18.2503 10.6665 17.7503 10.3332 17.417L9.6665 16.7503H17.4998C17.9998 16.7503 18.3332 16.417 18.3332 15.917V5.08366C18.3332 4.58366 17.9998 4.25033 17.4998 4.25033Z"
                    fill="#A162F7"
                  />
                </svg>

                <span>{item.transmissions ? item.transmissions : "N/A"}</span>
              </div>
            </div>
            {/* left content */}
            {/* right content */}
            <div className="md:text-sm lg:text-lg ltr:ml-auto">
              <span className="font-semibold text-black">
                ${item.price ? item.price : "N/A"}
              </span>
              <span>/d</span>
            </div>
            {/* right content */}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default ProductCard;
