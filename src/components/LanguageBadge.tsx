export const LanguageBadge = ({ lang }: { lang: 'es' | 'en' }) => {
    return (
        <span style={{ 
            display: 'inline-block', 
            width: '20px', 
            height: '14px', 
            borderRadius: '2px', 
            overflow: 'hidden',
            position: 'relative',
            verticalAlign: 'middle',
            marginRight: '4px',
            boxShadow: '0 0 2px rgba(0,0,0,0.3)'
        }}>
            {lang === 'es' ? (
                /* Argentina Flag Approx */
                <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(to bottom, #74ACDF 33%, #FFFFFF 33%, #FFFFFF 66%, #74ACDF 66%)',
                    position: 'relative'
                }}>
                    <div style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        width: '6px', 
                        height: '6px', 
                        background: '#F كافة', 
                        borderRadius: '50%',
                        backgroundColor: '#FCBB05',
                        border: '1px solid #003fa8'
                    }} />
                </div>
            ) : (
                /* USA Flag Approx */
                <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(to bottom, #B22234 20%, #FFFFFF 20%, #FFFFFF 40%, #B22234 40%, #B22234 60%, #FFFFFF 60%, #FFFFFF 80%, #B22234 80%)',
                    position: 'relative'
                }}>
                    <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '40%', 
                        height: '40%', 
                        background: '#3C3B6E' 
                    }} />
                </div>
            )}
        </span>
    );
};