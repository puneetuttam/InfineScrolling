import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/imageSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
    const dispatch = useDispatch();
    const { images, page } = useSelector((state) => state.images);

    useEffect(() => {
        dispatch(fetchImages(1));
    }, [dispatch]);

    const loadMore = () => {
        dispatch(fetchImages(page));
    };

    return (
        <InfiniteScroll
            dataLength={images.length}
            next={loadMore}
            hasMore={true}
            loader={<h4 className="text-center text-gray-600">Loading...</h4>}
        >
            <div className="flex items-center justify-center w-full">
                <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    );
};

export default ImageGallery;
