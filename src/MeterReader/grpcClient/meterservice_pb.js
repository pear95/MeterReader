// source: meterservice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ReadingMessage', null, global);
goog.exportSymbol('proto.ReadingPackage', null, global);
goog.exportSymbol('proto.ReadingStatus', null, global);
goog.exportSymbol('proto.StatusMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadingPackage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ReadingPackage.repeatedFields_, null);
};
goog.inherits(proto.ReadingPackage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReadingPackage.displayName = 'proto.ReadingPackage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReadingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReadingMessage.displayName = 'proto.ReadingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StatusMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StatusMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StatusMessage.displayName = 'proto.StatusMessage';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ReadingPackage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadingPackage.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadingPackage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadingPackage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadingPackage.toObject = function(includeInstance, msg) {
  var f, obj = {
    readingsList: jspb.Message.toObjectList(msg.getReadingsList(),
    proto.ReadingMessage.toObject, includeInstance),
    successful: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadingPackage}
 */
proto.ReadingPackage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadingPackage;
  return proto.ReadingPackage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadingPackage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadingPackage}
 */
proto.ReadingPackage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ReadingMessage;
      reader.readMessage(value,proto.ReadingMessage.deserializeBinaryFromReader);
      msg.addReadings(value);
      break;
    case 2:
      var value = /** @type {!proto.ReadingStatus} */ (reader.readEnum());
      msg.setSuccessful(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadingPackage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadingPackage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadingPackage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadingPackage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReadingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ReadingMessage.serializeBinaryToWriter
    );
  }
  f = message.getSuccessful();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * repeated ReadingMessage Readings = 1;
 * @return {!Array<!proto.ReadingMessage>}
 */
proto.ReadingPackage.prototype.getReadingsList = function() {
  return /** @type{!Array<!proto.ReadingMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ReadingMessage, 1));
};


/**
 * @param {!Array<!proto.ReadingMessage>} value
 * @return {!proto.ReadingPackage} returns this
*/
proto.ReadingPackage.prototype.setReadingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ReadingMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ReadingMessage}
 */
proto.ReadingPackage.prototype.addReadings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ReadingMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ReadingPackage} returns this
 */
proto.ReadingPackage.prototype.clearReadingsList = function() {
  return this.setReadingsList([]);
};


/**
 * optional ReadingStatus Successful = 2;
 * @return {!proto.ReadingStatus}
 */
proto.ReadingPackage.prototype.getSuccessful = function() {
  return /** @type {!proto.ReadingStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ReadingStatus} value
 * @return {!proto.ReadingPackage} returns this
 */
proto.ReadingPackage.prototype.setSuccessful = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    readingvalue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    notes: jspb.Message.getFieldWithDefault(msg, 3, ""),
    readingtime: (f = msg.getReadingtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadingMessage}
 */
proto.ReadingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadingMessage;
  return proto.ReadingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadingMessage}
 */
proto.ReadingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCustomerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReadingvalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReadingtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getReadingvalue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReadingtime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 CustomerId = 1;
 * @return {number}
 */
proto.ReadingMessage.prototype.getCustomerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ReadingMessage} returns this
 */
proto.ReadingMessage.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 ReadingValue = 2;
 * @return {number}
 */
proto.ReadingMessage.prototype.getReadingvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ReadingMessage} returns this
 */
proto.ReadingMessage.prototype.setReadingvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string Notes = 3;
 * @return {string}
 */
proto.ReadingMessage.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ReadingMessage} returns this
 */
proto.ReadingMessage.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp ReadingTime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ReadingMessage.prototype.getReadingtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ReadingMessage} returns this
*/
proto.ReadingMessage.prototype.setReadingtime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ReadingMessage} returns this
 */
proto.ReadingMessage.prototype.clearReadingtime = function() {
  return this.setReadingtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ReadingMessage.prototype.hasReadingtime = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StatusMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.StatusMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StatusMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StatusMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StatusMessage}
 */
proto.StatusMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StatusMessage;
  return proto.StatusMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StatusMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StatusMessage}
 */
proto.StatusMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ReadingStatus} */ (reader.readEnum());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StatusMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StatusMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StatusMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StatusMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ReadingStatus Success = 1;
 * @return {!proto.ReadingStatus}
 */
proto.StatusMessage.prototype.getSuccess = function() {
  return /** @type {!proto.ReadingStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ReadingStatus} value
 * @return {!proto.StatusMessage} returns this
 */
proto.StatusMessage.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.StatusMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.StatusMessage} returns this
 */
proto.StatusMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.ReadingStatus = {
  UNKNOW: 0,
  SUCCESS: 1,
  FAILURE: 2
};

goog.object.extend(exports, proto);
