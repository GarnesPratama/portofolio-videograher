import React from 'react'
import { useForm } from "react-hook-form"
import { postContactUs } from './api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const { mutate } = postContactUs()
  const onSubmit = (data: any) => {
    const payload = {
      data: data
    }
    mutate(payload as any, {
      onSuccess: (data) => {
        toast.success("Data Sudah Terkirim, Terimakasih sudah menghubngi saya")

        setTimeout(() => {
          router.reload()
        }, 5000)
      },
      onError: (error) => {
        toast.success("Sedang Terjadi Kesalahan, silahkan coba beberapa saat lagi")
      },
    });
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto my-20">
        <img
          src="/project/wheel.svg"
          alt="wheel"
          className="lg:w-10 md:w-8 w-6 h-auto mb-4"
        />
        <div className="">
          <h1 className="font-light font-forum text-gray-700 text-4xl sm:text-5xl lg:text-6xl">
            Ready to Tell Your Story?
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mt-4 text-justify">
            I believe in the power of video to connect, inspire, and move audiences.
            Let's work together to create a unique and impactful video that will leave
            a lasting impression.
          </p>
        </div>
        <div className="mt-14 lg:mx-20 md:mx-10 mx-3">
          <div className="border-2 border-[#F8C7B0] bg-[#F6F6F6] rounded-2xl p-6 sm:p-8 lg:p-10">
            <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-gray-800 text-sm lg:text-base font-medium">Name</span>
                </div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full bg-white text-gray-800 text-sm lg:text-base p-3"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-gray-800 text-sm lg:text-base font-medium">Email</span>
                </div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full bg-white text-gray-800 text-sm lg:text-base p-3"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-gray-800 text-sm lg:text-base font-medium">Message</span>
                </div>
                <textarea
                  {...register("message")}
                  placeholder="Type here"
                  className="input input-bordered w-full bg-white text-gray-800 text-sm lg:text-base p-3 h-24"
                />
              </label>
              <button className=" btn bg-[#E94B26] w-full rounded-3xl flex items-center justify-center px-4 py-3 text-white text-sm sm:text-base lg:text-lg font-medium">
                Submit

              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
