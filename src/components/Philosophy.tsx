const principles = [
  {
    number: "01",
    title: "Plan Before Execute",
    description: "ทุก agent ต้องส่งแผนก่อนลงมือทำ -- Prime ตรวจสอบแผนก่อนอนุมัติ",
  },
  {
    number: "02",
    title: "Nothing is Deleted",
    description: "ทุกสิ่งมีคุณค่า -- ย้ายไป archive ได้ แต่ไม่ลบ Git history คือความทรงจำ",
  },
  {
    number: "03",
    title: "Coordinate Before Implement",
    description: "ตกลง API contract ก่อน code -- backend กับ frontend ต้องรู้ว่าจะคุยกันยังไง",
  },
  {
    number: "04",
    title: "Quality Gates",
    description: "ก่อน deliver ต้องผ่าน tests, review, integration test -- ไม่มีทางลัด",
  },
  {
    number: "05",
    title: "External Brain, Not Command",
    description: "AI ช่วยคิด ช่วยจำ ช่วยเชื่อมจุด -- แต่มนุษย์ตัดสินใจ",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">
            // philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-navy-200 max-w-xl mx-auto">
            หลักการทำงานของ Team Marine
          </p>
        </div>

        {/* Principles list */}
        <div className="space-y-4">
          {principles.map((p) => (
            <div
              key={p.number}
              className="flex gap-6 p-6 rounded-xl bg-navy-900/30 border border-navy-700/30 hover:border-cyan-400/20 transition-all group"
            >
              <span className="text-3xl font-black text-navy-700 group-hover:text-cyan-400/30 transition-colors font-mono shrink-0">
                {p.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
