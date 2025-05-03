import { useParams } from "react-router-dom";
import Taskbar from "../../Common/Taskbar/Taskbar";
import dhikrList from "../../Data/Dhikr.json";
import './DuaDetailPage.css';

const DuaDetailPage = () => {
    const { id } = useParams();
    const selectedDua = dhikrList.find(item => item.id === id);

    if (!selectedDua) {
        return <div className="duas-page-container">Dua not found.</div>;
    }

    return (
        <div className="duas-page-container">
            <Taskbar showPlayButton={true} />
            <div className="dua-content">
                <div className="dua-text english">
                    {selectedDua.transliteration}
                </div>
                <div className="dua-text arabic">
                    {selectedDua.arabic}
                </div>
            </div>

            {selectedDua.references && selectedDua.references.length > 0 && (
                <div className="reference-section">
                    {selectedDua.references.map((ref, index) => (
                        <div className="reference-block" key={index}>
                            <p className="reference-text">{ref.text}</p>
                            <p className="reference-source">{ref.source}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DuaDetailPage;
