import React from 'react';
import DhikrCard from './DhikrCard';
import './DuasContainer.css';

const dhikrList = [
    {
        id: 'dhikr_001',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allāhu Akbar',
    },
    {
        id: 'dhikr_002',
        arabic: 'الْـحَمْـدُ للهِ',
        transliteration: 'Al-ḥamdu lillāh',
    },
    {
        id: 'dhikr_003',
        arabic: 'أَسْتَغْفِرُ اللّٰهَ',
        transliteration: 'Astaghfirullāh',
    },
    {
        id: 'dhikr_004',
        arabic: 'سُبْحَانَ اللّٰه',
        transliteration: 'Subḥānallāh',
    },
    {
        id: 'dhikr_005',
        arabic: 'سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ',
        transliteration: 'Subḥānallāhi wa biḥamdih',
    },
    {
        id: 'dhikr_006',
        arabic: 'لَا إِلٰهَ إِلَّا اللّٰهُ',
        transliteration: 'Lā ilāha illallāh',
    },
    {
        id: 'dhikr_007',
        arabic: 'اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي',
        transliteration: 'Allāhumma ighfir lī warḥamnī',
    },
    {
        id: 'dhikr_008',
        arabic: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',
        transliteration: 'Rabbi ighfir lī wa tub ʿalayya innaka anta at-Tawwābu ar-Raḥīm',
    },
    {
        id: 'dhikr_009',
        arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ',
        transliteration: 'Lā ḥawla wa lā quwwata illā billāh',
    },
    {
        id: 'dhikr_010',
        arabic: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ،
        وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ،
        أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.`,
        transliteration: `Allāhumma anta rabbī, lā ilāha illā anta, khalaqtanī wa anā ʿabduk,
        wa anā ʿalā ʿahdika wa waʿdika mā istaṭaʿt, aʿūdhu bika min sharri mā ṣanaʿt,
        abū’u laka biniʿmatika ʿalayya, wa abū’u laka bidhanbī, faghfir lī,
        fa-innahu lā yaghfiru adh-dhunūba illā anta.`,
    }
];

function DuasContainer() {
    return (
        <div className="duas-container">
            <hr className="divider" />
            {dhikrList.map((dhikr) => (
                <React.Fragment key={dhikr.id}>
                    <DhikrCard
                        arabic={dhikr.arabic}
                        transliteration={dhikr.transliteration}
                    />
                    <hr className="divider" />
                </React.Fragment>
            ))}
        </div>
    );
}

export default DuasContainer;
