import React, { useState } from "react";
import axios from "axios";

const ParentFeedbackForm = () => {

  const [formData, setFormData] = useState({
    parentName: "",
    child1: "",
    child1Sec: "",
    child2: "",
    child2Sec: "",
    parentEducation: "",
    address: "",
    sendChildDaily: "",
    reason: "",
    weightGain: "",
    sickFrequency: "",
    studyProgress: "",
    concentration: "",
    nutrition: "",
    attendence: "",
    impactOfNutritionScheme: "",
    effectOnAfternoonAttendence: "",
    effectOfNutritionDietPlan: "",
    improvementSuggestions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <div className="container shadow p-3 mb-5 bg-body-tertiary rounded mt-4">
        <h2 className="text-center mb-3">
          <b>पालकांचा अभिप्राय प्रश्नावली</b>
        </h2>
        <form className="fs-6" onSubmit={handleSubmit}>
          <div className="row mb-2">
            {/* 1 ROW*/}
            <div className="form-group">
              <label htmlFor="parentName" className="fw-semibold">
                १.पालकाचे संपूर्ण नाव
              </label>
              <input
                type="text"
                className="form-control"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
              />
            </div>
            {/* ROW */}
          </div>
          <div className="row mb-2">
            <h6 className="fw-semibold">
              २.सदर शाळेत शिकत असलेल्या पाल्यांचे नावे
            </h6>
            <div className="col-md-6">
              <div className="form-group">
                <label className="fw-semibold">
                  १
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="child1"
                  name="child1"
                  value={formData.child1}
                  onChange={handleChange}
                />

                <label htmlFor="parentName" className="fw-semibold">
                  इयत्ता व तुकडी
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="child1Sec"
                  name="child1Sec"
                  value={formData.child1Sec}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="fw-semibold">
                  २
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="child2"
                  name="child2"
                  value={formData.child2}
                  onChange={handleChange}
                />

                <label htmlFor="parentName" className="fw-semibold">
                  इयत्ता व तुकडी
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="child2Sec"
                  name="child2Sec"
                  value={formData.child2Sec}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            {/* 2 ROW*/}
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="education" className="fw-semibold">
                  3.पालकाची शैक्षणिक पात्रता
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="parentEducation"
                  name="parentEducation"
                  value={formData.parentEducation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="parentAddress" className="fw-semibold">
                  ४.पालकाचा निवासाचा संपूर्ण पत्ता
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="1"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ५.मुलांना दररोज शाळेत पाठवतात का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sendChildDaily"
                      id="sendChildDailyYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sendChildDailyYes"
                    >
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sendChildDaily"
                      id="sendChildDailyNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sendChildDailyNo"
                    >
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row mb-2">
            <div className="form-group">
              <label className="fw-semibold">
                ५.१ नसल्यास कारण नमूद करयायात यावेः
              </label>
              <textarea
                className="form-control"
                id="reason"
                rows="1"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Row 4 */}
          <div className="row mb-2">
            <h6 className="fw-semibold">६.मुलांवर पोषण आहाराचा प्रभाव</h6>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ६.१ मुलांचे/मुलींचे वजन वाढले का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="weightGain"
                      id="weightGainYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="weightGainYes">
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="weightGain"
                      id="weightGainNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="weightGainNo">
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ६.२ वारंवार आजारी पडयायाचे प्रमाण कमी झाले का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sickFrequency"
                      id="sickFrequencyYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sickFrequencyYes"
                    >
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sickFrequency"
                      id="sickFrequencyNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="sickFrequencyNo"
                    >
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ६.३ अभ्यासातील प्रगती चागंली झाली का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="studyProgress"
                      id="studyProgressYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="studyProgressYes"
                    >
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="studyProgress"
                      id="studyProgressNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="studyProgressNo"
                    >
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 5 ROW*/}
          <div className="row mb-2">
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ६.४ अभ्यासातील एकाग्रता वाढली का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="concentration"
                      id="concentrationYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="concentrationYes">
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="concentration"
                      id="concentrationNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="concentrationNo">
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ६.५ मुला-मुलींचे पोषण चागंले होत आहे का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="nutrition"
                      id="nutritionYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="nutritionYes"
                    >
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="nutrition"
                      id="nutritionNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="nutritionNo"
                    >
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ६.६ नियमित शाळेत जाण्यामध्ये सुधारणा झाली का?
                </label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="attendence"
                      id="attendenceYes"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="attendenceYes"
                    >
                      होय
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="attendence"
                      id="attendenceNo"
                      value="0"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="attendenceNo"
                    >
                      नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 6 ROW*/}
          <div className="row mb-2">
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ७.वि‌द्यार्थ्यांना शालेय नियमित जाण्यासाठी शालेय पोषण आहार
                  योजनेचा प्रभाव
                </label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="impactOfNutritionScheme"
                      id="attendSchoolRegularly"
                      value="नियमितपणे शाळेत जाणे"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="attendSchoolRegularly">
                      नियमितपणे शाळेत जाणे
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="impactOfNutritionScheme"
                      id="sometimesGoing"
                      value="कधीकधी जाणे"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="sometimesGoing">
                      कधीकधी जाणे
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="impactOfNutritionScheme"
                      id="justGoForTheDiet"
                      value="फक्त आहारासाठी जाणे"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="justGoForTheDiet">
                      फक्त आहारासाठी जाणे
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="impactOfNutritionScheme"
                      id="notGoing"
                      value="जात नाही"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="notGoing">
                      जात नाही
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ८.दुपारच्या उपस्थितीवर जेवणाचा प्रभाव
                </label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="effectOnAfternoonAttendence"
                      id="increase1"
                      value="वाढलेली"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="increase1">
                      वाढलेली
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="effectOnAfternoonAttendence"
                      id="noEffect1"
                      value="कोणताही परिणाम नाही"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="noEffect1">
                      कोणताही परिणाम नाही
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="effectOnAfternoonAttendence"
                      id="decrease1"
                      value="कमी"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="decrease1">
                      कमी
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="fw-semibold">
                  ९.मुलांच्या सामाजिकीकरण प्रक्रियेवर पोषण आहार योजनेचा प्रभाव
                  तुम्हाला कसा वाटतो ?
                </label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="effectOfNutritionDietPlan"
                      id="increase2"
                      value="वाढलेली"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="increase2">
                      वाढलेली
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="effectOfNutritionDietPlan"
                      id="noEffect2"
                      value="कोणताही परिणाम नाही"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="noEffect2">
                      कोणताही परिणाम नाही
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="effectOfNutritionDietPlan"
                      id="decrease2"
                      value="कमी"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="decrease2">
                      कमी
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 7 */}
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="form-group">
                <label className="fw-semibold">
                  १०.योजनेमध्ये सुधारणा करण्यासाठी सूचना
                </label>
                <textarea
                  className="form-control"
                  id="improvementSuggestions"
                  rows="2"
                  name="improvementSuggestions"
                  value={formData.improvementSuggestions}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="row mt-4">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">
                सबमिट करा
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ParentFeedbackForm;
