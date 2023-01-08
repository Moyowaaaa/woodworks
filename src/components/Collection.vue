<template>
    <div class="min-h-screen h-auto w-10/12 mx-auto flex flex flex-col">
        <h1 class="text-3xl lg:text-4xl font-[avenir-bold] text-[#005454] pb-4">OUR COLLECTION</h1>
        <div class="h-screen flex flex-col">

            <div class="flex w-full  lg:h-4/6 flex-col lg:flex-row">
            <div class="w-full lg:w-3/12  sofas h-[15rem] lg:h-auto">
                <div class="flex flex-col gap-2 font-[avenir] text-sm lg:text-xl mt-12 ml-4">
                    SOFA
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg" class="w-[1.5rem]"/></div>
                </div>
            </div>
            <div class=" w-full lg:w-6/12 ">
                <div class="flex flex-col h-full">
                    <div class="flex lg:flex-row w-full h-3/6">
                        <div class="w-6/12  decor h-[15rem] lg:h-auto">
                            <div class="flex flex-col gap-2 font-[avenir] text-sm lg:text-xl mt-6 ml-8">
                    Decor
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg" class="w-[1.5rem]" /></div>
                </div>
                        </div>
                        <div class="w-6/12  lamp">
                            <div class="flex flex-col gap-2 font-[avenir] text-sm lg:text-xl mt-6 ml-8">
                    Lamp
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg"  class="w-[1.5rem]"/></div>
                </div>
                        </div>
                    </div>

                    <div class="w-full h-3/6 nightStand">
                        <div class="flex flex-col gap-2 font-[avenir] text-sm lg:text-xl mt-6 ml-8">
                    Nightstand
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg"  class="w-[1.5rem]"/></div>
                </div>
                    </div>

                    
                </div>
            </div>
            <div class="w-full lg:w-3/12  chair h-[15rem] lg:h-auto">
                <div class="flex flex-col gap-2 font-[avenir] text-sm lg:text-xl mt-6 ml-8">
                    Chair
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg"  class="w-[1.5rem]"/></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full h-2/6 ">
            <div class="w-full lg:w-6/12  sink  h-[15rem] lg:h-auto">
                <div class="flex flex-col gap-2 font-[avenir] text-sm lg:text-xl lg:mt-6 lg:ml-8">
                    Sink
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg" class="w-[1.5rem]" /></div>
                </div>
            </div>
            <div class="w-full lg:w-6/12  table  h-[15rem] lg:h-auto">
                <div class="lg:relative left-32 top-44 flex flex-col gap-1 font-[avenir] text-sm lg:text-xl mt-6 ml-8">
                    Table
                    <div class="flex gap-2 items-center text-sm">View More <img src="../assets/images/leftArrow.svg" class="w-[1.5rem]" /></div>
                </div>
            </div>
        </div>

        </div>
      

    </div>
    <!-- <div class="min-h-screen h-auto w-10/12 mx-auto border-2 border-[red] grid grid-cols-4 grid-rows-6 auto-cols-fr">
       
  <div class="bg-[green] row-span-4 sofa">01</div>
  <div class=" grid col-span-2 row-span-4">
    <div class="bg-[purple] grid">
        <div class="bg-[orange] row-span-2"></div>
        <div class="bg-[black] col-span-2"></div>
    </div>

    <div class="bg-[yellow] row-span-1"></div>
    </div>
  <div class="bg-[teal] row-span-4">01</div>
  <div class="bg-[blue] col-span-4 row-span-3 ">01</div>
  
  </div>     -->
    
</template>

<script setup lang="ts">

</script>

<style scoped>
.sofas{
    background-image: url('../assets/images/sofa.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.decor{
    background-image: url('../assets/images/decor.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.lamp{
    background-image: url('../assets/images/lamp.png');
    background-size: cover;
    background-repeat: no-repeat;
}


.nightStand{
    background-image: url('../assets/images/nightstand.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.chair{
    background-image: url('../assets/images/chair.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.sink{
    background-image: url('../assets/images/sink.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.table{
    background-image: url('../assets/images/table.png');
    background-size: cover;
    background-repeat: no-repeat;
}


@media screen and (max-width:485px) {
    .sofas{
        background-position-y: -25vh;
    
    }
}





</style>