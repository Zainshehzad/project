import React from "react"
import Image from "next/image"
const page = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/house.jfif" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Zain waraich house
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        My house is a very beautifull My house has a six bog rooms My house is situated in Geo There is a nine kichen in my house There is a also study in my room in my house
        My house is a very neat and clean There is a beautifull gardan i anm a time outside in my house  My house is a very airy and well lighted    my huse is a very beutifull and nice mt house is to car and nice                                                                                                      
      </div>
    </figcaption>
  </div>
</figure>
  );
};

export default page