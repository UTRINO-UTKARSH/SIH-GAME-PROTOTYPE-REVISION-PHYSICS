
        // Dynamically draw curvy dotted line connecting nodes
        function drawConnector() {
            const path = document.getElementById('connector');
            const nodes = document.querySelectorAll('.level-node');

            if (nodes.length > 1) {
                let d = '';
                nodes.forEach((node, index) => {
                    const rect = node.getBoundingClientRect();
                    const parentRect = node.parentElement.getBoundingClientRect();
                    const x = rect.left + rect.width / 2 - parentRect.left;
                    const y = rect.top + rect.height / 2 - parentRect.top;

                    if (index === 0) {
                        d += `M${x},${y}`;
                    } else {
                        const prevRect = nodes[index - 1].getBoundingClientRect();
                        const prevX = prevRect.left + prevRect.width / 2 - parentRect.left;
                        const prevY = prevRect.top + prevRect.height / 2 - parentRect.top;
                        const midX = (prevX + x) / 2;
                        d += ` Q${midX},${prevY} ${x},${y}`;
                    }
                });
                path.setAttribute('d', d);
            }
        }

        window.addEventListener('load', drawConnector);
        window.addEventListener('resize', drawConnector);

        // Open quiz overlay on clicking a level
        document.querySelectorAll('.level-node.unlocked .play-button').forEach(button => {
            button.addEventListener('click', () => {
                const parentNode = button.closest('.level-node');
                const levelIndex = parentNode.getAttribute('data-level-index');
                openQuiz(levelIndex); // pass index to load level-specific questions
            });
        });
