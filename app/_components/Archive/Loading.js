import React from "react";

export const Loading = () => {
    return (
        <div>
            {/* <div className="flex justify-between animate-pulse px-4 py-5">
                <div className="h-6 bg-slate-100 w-20"></div>
                <div className="h-10 bg-slate-100 w-64"></div>
            </div> */}
            <div className="product-grid__products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-8 flex-grow-0">
                <div class="h-[500px] p-3 shadow-md">
                    <div class="animate-pulse flex flex-col space-y-4 justify-between h-full pb-8">
                        <div className="flex flex-col space-y-4">
                            <div class=" bg-slate-100 w-full h-[250px]"></div>
                            <div class="h-6 bg-slate-100 w-64"></div>
                            <div class="h-16 bg-slate-100"></div>
                        </div>

                        <div class="h-8 bg-slate-100 w-24"></div>
                    </div>
                </div>
                <div class="h-[500px] p-3 shadow-md">
                    <div class="animate-pulse flex flex-col space-y-4 justify-between h-full pb-8">
                        <div className="flex flex-col space-y-4">
                            <div class=" bg-slate-100 w-full h-[250px]"></div>
                            <div class="h-6 bg-slate-100 w-64"></div>
                            <div class="h-16 bg-slate-100"></div>
                        </div>

                        <div class="h-8 bg-slate-100 w-24"></div>
                    </div>
                </div>
                <div class="h-[500px] p-3 shadow-md">
                    <div class="animate-pulse flex flex-col space-y-4 justify-between h-full pb-8">
                        <div className="flex flex-col space-y-4">
                            <div class=" bg-slate-100 w-full h-[250px]"></div>
                            <div class="h-6 bg-slate-100 w-64"></div>
                            <div class="h-16 bg-slate-100"></div>
                        </div>

                        <div class="h-8 bg-slate-100 w-24"></div>
                    </div>
                </div>
                <div class="h-[500px] p-3 shadow-md">
                    <div class="animate-pulse flex flex-col space-y-4 justify-between h-full pb-8">
                        <div className="flex flex-col space-y-4">
                            <div class=" bg-slate-100 w-full h-[250px]"></div>
                            <div class="h-6 bg-slate-100 w-64"></div>
                            <div class="h-16 bg-slate-100"></div>
                        </div>

                        <div class="h-8 bg-slate-100 w-24"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
