document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['adsBlocked', 'totalAds'], (data) => {
        const { adsBlocked = 0, totalAds = 0 } = data;
        const statsText = `Ads Blocked: ${adsBlocked} / Total Ads: ${totalAds}`;
        document.getElementById('stats').textContent = statsText;
    });
});
