/** 點擊滑動至指定區域
 * @param {string} block 區塊名字
 */
const scrollToBlock = async (block) => {
	const goToBlock = document.querySelector(`.${block}`);
	window.scroll({
		top: goToBlock.offsetTop,
		behavior: 'smooth',
	});
};

export { scrollToBlock };
