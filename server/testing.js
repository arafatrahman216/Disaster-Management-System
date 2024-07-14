async function findUserDonations(userId) {
    try {
        // Step 1: Find User's Donations
        const donations = await db.Donation.find({ UserID: userId });

        // Step 2: Retrieve Donation Items
        let donationItemIds = [];
        donations.forEach(donation => {
            donationItemIds = donationItemIds.concat(donation.DonationItemID);
        });

        // Step 3: Query Donation Items
        const donationItems = await db.DonationItem.find({ DonationItemID: { $in: donationItemIds } });

        // Return or process donation items as needed
        return donationItems;
    } catch (error) {
        console.error("Error finding user donations:", error);
        throw error;
    }
}
