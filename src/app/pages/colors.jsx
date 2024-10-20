"use client";
import React, { useEffect, useState } from 'react';
import client from '@/app/lib/apollo-client';
import { HOMEPAGE_QUERY, COLOUR_CATEGORY_QUERY } from '@/app/lib/queries';
import Image from "next/image";
import Loading from '../loading';

function Colors() {
    const [homepageData, setHomepageData] = useState(null);
    const [colorCategories, setColorCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            // Fetch homepage data
            const homepageResponse = await client.query({
                query: HOMEPAGE_QUERY,
            });
            setHomepageData(homepageResponse.data.pages.nodes[0].homepage);

            // Fetch color categories data
            const colorCategoryResponse = await client.query({
                query: COLOUR_CATEGORY_QUERY,
            });
            const colorsFromAPI = colorCategoryResponse.data.allColourCategory.nodes[0]?.colours?.nodes || [];

            // Add additional colors for testing
            const additionalColors = [
                { title: 'Colour Name 6', colourInfo: { colourRgb: '123,234,45' } },
                { title: 'Colour Name 7', colourInfo: { colourRgb: '67,89,123' } },
                { title: 'Colour Name 8', colourInfo: { colourRgb: '255,99,71' } }
            ];

            setColorCategories([...colorsFromAPI, ...additionalColors]);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <Loading/>
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='md:px-32 px-5 my-14 '>
            {/* Heading  */}
            <h1 className='font-semibold md:text-2xl text-xl drop-shadow text-gray-800' data-aos="fade-up">
                {homepageData?.homeColoursSubtitle}
            </h1>
            <div className='font-bold md:text-3xl text-2xl drop-shadow flex items-center md:space-x-3 mb-10' data-aos="fade-up">
                <p>{homepageData?.homeColoursTitle}</p>
                <Image src='/yellowline.svg' width={520} height={500} alt="Banner Image" className="h-5 w-60 md:block hidden" />
            </div>
            {/* fetched color details  */}
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-5 gap-x-5 w-full" >
                {colorCategories.map((color, index) => (
                    <div key={index} className="relative hover:border hover:shadow-md rounded-md group pb-1" data-aos="flip-right">
                        <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="font-semibold bg-opacity-75 p-2 rounded">
                                Astral Paints
                            </p>
                        </div>
                        <div
                            className="md:h-36 h-32 p-2 border"
                            style={{ backgroundColor: `rgb(${color.colourInfo.colourRgb})` }}
                        >
                            <p className='p-2 border w-full h-full'></p>
                        </div>
                        <p className="mt-2 text-center font-semibold">{color.title}</p>
                        <p className="text-center text-sm mt-2">{color.colourInfo.colourRgb}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Colors;