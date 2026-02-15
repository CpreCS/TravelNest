import { sampleSize } from './array';

export function filterCountries(countries, term, region) {
    return countries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(term.toLowerCase());
        const matchesRegion = region === 'All' || country.region === region;
        return matchesSearch && matchesRegion;
    });
}

export function sortByCountryName(countries) {
    return [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export function countUniqueRegions(countries) {
    const regions = countries.map(c => c.region);
    return new Set(regions).size;
}

export function filterPicked(countries, picksSet) {
    if (!countries) return [];
    return countries.filter(c => picksSet.has(c.cca2));
}

export function filterUnpicked(countries, picksSet) {
    if (!countries) return [];
    return countries.filter(c => !picksSet.has(c.cca2));
}

export function pickRandomCountries(countries, n) {
    return sampleSize(countries, n);
}