"use client"
import { CldUploadButton } from "next-cloudinary";
import { useEffect, useState } from "react";

import { useUser, FoundItem } from "@/app/user/UserContext";


export default function ReportFoundItem() {

    // State variables
  let uploadedImgPublicId = "";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [imageId, setImageId] = useState("");

  // Use the useUser hook to get the appendFoundItem function
    const user = useUser();
    const { appendFoundItem } = user as any;

  // useEffect hook to handle side effects (in this case, form submission logic)
  useEffect(() => {
    // Logic to handle the form submission
    // This will run after the component has rendered
    const foundItem: FoundItem = {
      title: title,
      description: description,
      date: date,
      location: location,
      image: imageId,
    };

    // Check if all required fields are filled before submitting
    if (title && description && date && location && imageId) {
      appendFoundItem(foundItem);
    }
  }, [title, description, date, location, imageId, appendFoundItem]);

  // Callback function for handling image upload
  const handleImageUpload = (result: any) => {
    console.log(result);
    uploadedImgPublicId = result.info.public_id;
    console.log(uploadedImgPublicId);
    setImageId(uploadedImgPublicId);
  };

  // Event handler for form submission
  const submitFoundForm = (e: any) => {
    e.preventDefault();
    // The logic to handle the form submission is now in the useEffect
    setTitle("");
    setDescription("");
    setLocation("");
    setDate("");
    setImageId("");
  };
  
    // let uploadedImgPublicId = "";
    // const user = useUser();
    // const { appendFoundItem } = user as any;

    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [date, setDate] = useState("");
    // const [location, setLocation] = useState("");
    // const [imageId, setImageId] = useState("");

    // const submitFoundForm = (e:any)=>{
    //     e.preventDefault();
    //     const foundItem:FoundItem = {
    //         title: title,
    //         description: description,
    //         date : date,
    //         location: location,
    //         image: imageId
    //     }

        
    //     appendFoundItem(foundItem);
    //     console.log(foundItem);
        
    // }

    return (
        <div>
            <div className="grid grid-cols-12 w-4/5 mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <form className="col-span-12" onSubmit={submitFoundForm}>
      {/* <form className="col-span-12"> */}
        <h2 className="text-2xl font-semibold mb-4">Report Found Item</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 text-sm font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 text-sm font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            required
          ></textarea>
        </div>

        <div className="flex flex-row justify-between">
        <div className="mb-4 basis-1/3 pr-4">
          <label htmlFor="image" className="block text-gray-600 text-sm font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            id="loaction"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        

        <div className="mb-4 basis-1/3 px-4">
          <label htmlFor="image" className="block text-gray-600 text-sm font-semibold mb-2">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>


        <div className="mb-4 basis-1/3 pl-4">
          <label htmlFor="image" className="block text-gray-600 text-sm font-semibold mb-2">
            Upload Image
          </label>
          {/* <input
            type="file"
            id="image"
            name="image"
            // value={image}
            // onChange={(e) => setImage(e.target.value)}
            className="w-full border p-2 rounded"
            required
          /> */}

        <CldUploadButton onUpload={(result:any)=>{

            // console.log(result)
            uploadedImgPublicId = result.info.public_id
            // console.log(uploadedImgPublicId)
            setImageId(uploadedImgPublicId)

            }} uploadPreset="found_eiv9ks7h" />

        </div>
        </div>
        

   

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
        {/* <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={submitFoundForm}
        > */}
        
          Submit
        </button>
      </form>
    </div>
        </div>
    );
  }
  