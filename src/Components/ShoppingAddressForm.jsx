// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateField, setErrors, clearErrors, handleFormOpen } from '../Redux/cartSlice/addressSlice';
// import { validateAddress } from './validators';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

// const ShoppingAddressForm = () => {
//   const dispatch = useDispatch();
//   const { fields, errors, isOpen } = useSelector((s) => s.address);

//   const handleChange = (field, value) => {
//     dispatch(updateField({ field, value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateAddress(fields);

//     if (Object.keys(newErrors).length > 0) {
//       dispatch(setErrors(newErrors));
//       return;
//     }

//     dispatch(clearErrors());
//     console.log('✅ Form submitted:', fields);
//   };

//   const inputClass = (field) =>
//     `border p-2 w-full mb-2 rounded ${errors[field] ? 'border-red-500' : 'border-gray-300'
//     }`;

//     const handleClose = () => {
//       dispatch(handleFormOpen(false))
//     }

//   return (
//     <div>
//         <div
//           className={`fixed inset-0 z-99 flex transition-all duration-500 ${isOpen ? "bg-black/40 pointer-events-auto" : "bg-transparent pointer-events-none"}`}
//         >
//           <div
//             className={`h-full w-full max-w-md md:w-[30%] bg-white shadow-xl overflow-y-auto relative
//           flex flex-col justify-center transition-transform duration-500 ease-in-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"} ml-auto `}
//           >
//             {/* Close Button */}
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
//               aria-label="Close"
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>

//             {/* Form */}
//             <div className="p-8">
//               <h2 className="text-2xl font-bold mb-6 text-[#74B816] text-center">
//                 Add Delivery Address
//               </h2>

//               <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
//                 {Object.keys(fields).map((field) => (
//                   <div key={field}>
//                     <input
//                       className={inputClass(field)}
//                       placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                       value={fields[field]}
//                       onChange={(e) => handleChange(field, e.target.value)}
//                     />
//                     {errors[field] && (
//                       <p className="text-red-500 text-sm">{errors[field]}</p>
//                     )}
//                   </div>
//                 ))}
//                 <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//                   Save Address & Continue
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// };

// export default ShoppingAddressForm;





import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors, clearErrors, handleFormOpen, resetForm, handlePayment } from '../Redux/cartSlice/addressSlice';
import { validateAddress } from './validators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Payment from './Payment';

const ShoppingAddressForm = () => {
  const dispatch = useDispatch();
  const { fields, errors, isOpen } = useSelector((s) => s.address);

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateAddress(fields);

    if (Object.keys(newErrors).length > 0) {
      dispatch(setErrors(newErrors));
      return;
    }

    dispatch(clearErrors());
    dispatch(handleFormOpen(false));
    dispatch(resetForm())
    dispatch(handlePayment(true));
    console.log('✅ Form submitted:', fields);

  };

  const inputClass = (field) =>
    `border p-2 w-full mb-2 rounded ${errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  const handleClose = () => {
    dispatch(handleFormOpen(false))
  }

  // const handlePayment = () => {
  //   console.log('payment page');

  //   // dispatch(handlePayment());
  // }

  return (
    <div>
      <div
        className={`fixed inset-0 z-99 flex transition-all duration-500 ${isOpen ? "bg-black/40 pointer-events-auto" : "bg-transparent pointer-events-none"}`}
      >
        <div
          className={`h-full w-full max-w-md md:w-[30%] bg-white shadow-xl overflow-y-auto relative
          flex flex-col justify-center transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"} ml-auto `}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#74B816] text-center">
              Add Delivery Address
            </h2>

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
              {Object.keys(fields).map((field) => (
                <div key={field}>
                  <p className="capitalize ">{[field]}</p>

                  <input
                    className={inputClass(field)}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={fields[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm">{errors[field]}</p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded">
                Save Address & Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ShoppingAddressForm;
