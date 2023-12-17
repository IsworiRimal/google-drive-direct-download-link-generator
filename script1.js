function generateDirectLink() {
    const driveLinkInput = document.getElementById('driveLink');
    const directLinkOutput = document.getElementById('directLink');

    const driveLink = driveLinkInput.value.trim();

    if (driveLink === '') {
        directLinkOutput.innerText = 'Please enter a valid Google Drive link.';
        return;
    }

    const fileId = extractFileId(driveLink);

    if (!fileId) {
        directLinkOutput.innerText = 'Invalid Google Drive link format.';
        return;
    }

    const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    directLinkOutput.innerHTML = `Direct Link: <a href="${directLink}" target="_blank">${directLink}</a>`;
}

function extractFileId(driveLink) {
    const match = driveLink.match(/\/d\/([^\/]+)/);
    return match ? match[1] : null;
}

function copyDirectLink() {
    const directLinkOutput = document.getElementById('directLink');
    const directLinkText = directLinkOutput.innerText;

    const tempInput = document.createElement('input');
    tempInput.value = directLinkText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const copyStatus = document.getElementById('copyStatus');
    copyStatus.innerText = 'Copied!';
    setTimeout(() => {
        copyStatus.innerText = '';
    }, 2000);
}
