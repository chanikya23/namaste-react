import React from 'react';

const StarRating = ({ rating = 0 }) => {
    const maxRating = 5; // Maximum rating value

    // Ensure the rating is within the valid range
    const validRating = Math.max(0, Math.min(maxRating, rating));
    const fullStars = Math.floor(validRating);
    const halfStar = validRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxRating - fullStars - halfStar;

    return (
        <div className="flex items-center">
            {/* Render full stars */}
            {Array.from({ length: fullStars }).map((_, i) => (
                <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                </svg>
            ))}
            
            {/* Render half star if needed */}
            {halfStar === 1 && (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="50%" style={{ stopColor: 'yellow', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M12 2v15.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2z" />
                    <path fill="url(#grad1)" d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2z" />
                </svg>
            )}

            {/* Render empty stars */}
            {Array.from({ length: emptyStars }).map((_, i) => (
                <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                </svg>
            ))}
        </div>
    );
}

export default StarRating;
