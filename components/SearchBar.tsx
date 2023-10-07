"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchManufacturer } from ".";
import Image from "next/image";

interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
}

function SearchButton({ otherClasses }: { otherClasses: string }) {
    return (
        <button type="submit" className={`ml-1 z-10 ${otherClasses}`}>
            <Image
                src="/magnifying-glass.svg"
                alt="magnifying glass"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    );
}

export default function SearchBar({
    setManufacturer,
    setModel,
}: SearchBarProps) {
    const [searchManufacturer, setSearchManufacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer === "" && searchModel === "") {
            return alert("Please fill in the search bar");
        }

        setModel(searchModel);
        setManufacturer(searchManufacturer);
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }

        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;

        router.push(newPathname, { scroll: false });
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={20}
                    height={20}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
}
