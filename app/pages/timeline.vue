<template>
    <div class="pt-10 md:pt-12 md:pb-6 md:px-12 flex flex-col gap-6">
        <div class="w-full flex flex-wrap-reverse lg:flex-nowrap gap-6 lg:gap-0 items-center">
            <AppTitle class="mx-auto w-fit text-center lg:text-left">
                {{ $t("timeline.title") }}
            </AppTitle>
        </div>
        <div class="space-y-8">
            <div class="w-full flex justify-center p-4">
                <Timeline />
            </div>
        </div>
    </div>
</template>